"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';


export const createWeight = async (input: FormData) => { 
  const user = await currentUser();
  if (!user) throw new Error('no user')

    const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const weight: string = input.get('weight') as string || '';
  const childId: number = Number(inputChildId)

  await prisma.weight.create({data: {
    weight: weight,
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
