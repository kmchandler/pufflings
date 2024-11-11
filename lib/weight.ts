"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';


export const createWeight = async (input: FormData) => { 
  const user = await currentUser();
  if (!user) throw new Error('no user')

    const familyUser = await prisma.family_user.findFirstOrThrow({
      where: {user_id: user.id},
      include: {
        family: true
      }
    })

    const family = familyUser.family

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const pounds: string = input.get('pounds') as string || '';
  const ounces: string = input.get('ounces') as string || '';
  const childId: number = Number(inputChildId)

  await prisma.weight.create({data: {
    pounds: pounds,
    ounces: ounces,
    child_id: childId,
  }})
  redirect(`/pufflings/family/${family.id}/child/${childId}/profile`)
}

export const lastCreatedWeight = async (childId: string) => {

  const childIdNum: number = Number(childId)

  const weight = await prisma.weight.findMany({
    where: {child_id: childIdNum},
    orderBy: {
      id: 'desc',
    },
    take: 1,
  })
  
  const currentWeight = weight[0]
  return currentWeight;
}
