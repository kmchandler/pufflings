"use server";
import prisma from '@/lib/db'
import { family } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';


interface FamilydCreate extends Omit<family, 'id'> {

}

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

//this function will UPDATE a different user's information to add family_id and family_name

//need to be able to search for the user by email on the add family member page (to plug into the FormData). then need to use that email to pull the userId, so need to access that info on this page as well

export const addFamilyMember = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
    where: {user_id: user.id}
  })

  const userInfo: FamilyMemberAdd = {
    family_name: family.family_name,
    family_id: family.id
  }

  const updateUser = await prisma.____.update({
    where: {
      email: __.email,
    },
    data: {
      userInfo
    }
  })

  await prisma.____.update({updateUser})
}
