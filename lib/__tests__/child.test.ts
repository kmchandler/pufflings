import { getChild, createChild, deleteChild } from '../child'
import prisma from '@/lib/db' 
import { currentUser } from '@clerk/nextjs/server'

jest.mock('next/navigation')
import { redirect } from 'next/navigation'

describe('Child lib funtions', () => {
    describe('getChild', () => {
        it('should find a child by id', async () => {
            await getChild(1)
            expect(prisma.child.findUnique).toHaveBeenCalled()
            expect(prisma.child.findUnique).toHaveBeenCalledWith({
                where: {id: 1},
                include: {
                    feeds: {
                        orderBy: {
                            end_time: 'desc'
                        }
                    },
                    medicals: true,
                    sleeps: true,
                    diapers: true
                }
            })
        })
    })

    describe('createChild', () => {
        it('should throw for no current user', async () => {
            (currentUser as jest.Mock).mockReturnValue(Promise.resolve())
            expect(async () => 
                await createChild(new FormData())
            ).rejects.toThrow('no user')
        })

        it('should look for the family with the user id', async () => {
            (prisma.family_user.findFirstOrThrow as jest.Mock).mockReturnValue(Promise.resolve({family: {}}))
            const formData = new FormData()
            formData.set('name', 'gandalf')
            await createChild(formData)
            expect(prisma.family_user.findFirstOrThrow).toHaveBeenCalled()
            expect(prisma.family_user.findFirstOrThrow).toHaveBeenCalledWith({
                where: {user_id: global.__USER__.id},
                include: {
                  family: true
                }
            })
        })

        it('should return if no birthday', async () => {
            (prisma.family_user.findFirstOrThrow as jest.Mock).mockReturnValue(Promise.resolve({family: {}}))
            const formData = new FormData()
            formData.set('name', 'gandalf')
            expect(await createChild(formData)).toBe(undefined)
        })

        it('should attempt to create a new child', async () => {
            (prisma.family_user.findFirstOrThrow as jest.Mock).mockReturnValue(Promise.resolve({family: {id: 456}}))
            const formData = new FormData()
            formData.set('name', 'gandalf')
            formData.set('birthday', '1/22/1986')
            await createChild(formData)
            expect(prisma.child.create).toHaveBeenCalled()
            expect(prisma.child.create).toHaveBeenCalledWith({
                data: {
                    name: 'gandalf',
                    birthday: new Date('1/22/1986'),
                    family_id: 456
                }
            })
        })

        it('should redirect after creating a child', async () => {
            (prisma.family_user.findFirstOrThrow as jest.Mock).mockReturnValue(Promise.resolve({family: {id: 456}}))
            const formData = new FormData()
            formData.set('name', 'gandalf')
            formData.set('birthday', '1/22/1986')
            await createChild(formData)
            expect(redirect).toHaveBeenCalledWith('/pufflings/family/456')
        })
    })

    describe('deleteChild', () => {
        it('should call delete', async () => {
            const childId = 456
            const family_id = '123'
            await deleteChild(childId, family_id)
            expect(prisma.child.delete).toHaveBeenCalledWith({
                where: {
                    id: 456
                }
            })
        })

        it('should redirect after delete', async () => {
            const childId = 456
            const family_id = '123'
            await deleteChild(childId, family_id)
            expect(redirect).toHaveBeenCalledWith('/pufflings/family/123')
        })
    })
})
