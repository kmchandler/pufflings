"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

export const getFamily = async (FamilyId: number) => {
  return await prisma.family.findUnique({
    where: {id: FamilyId},
    include: {
      children: true,
    }
  })
}

export const createFamily = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family_name:string = input.get('family_name') as string || '';

  const family = {
    family_name: family_name,
    user_id: user.id
  } 

  await prisma.family.create({data: family})
}
