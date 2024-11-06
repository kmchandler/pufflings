"use server";
import prisma from '@/lib/db'
import { child } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

interface ChildCreate extends Omit<child, 'id'> {

}

export const getChild = async (childId: number) => {
  return await prisma.child.findUnique({
    where: {id: childId},
    include: {
      feeds: true,
      medicals: true,
      sleeps: true,
      diapers: true,
    }
  })
}

export const createChild = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
    where: {user_id: user.id}
  })

  const name:string = input.get('name') as string || '';

  const child: ChildCreate = {
    name: name,
    family_id: family.id,
  }

  await prisma.child.create({data: child})
}

export const deleteChild = async (childId: number, family_id: string) => {
  await prisma.child.delete({
    where: {
      id: childId
    }
  })
  redirect(`/pufflings/family/${family_id}`)
}
