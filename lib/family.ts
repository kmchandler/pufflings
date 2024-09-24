"use server";
import prisma from '@/lib/db'
import { family } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import clerkClient from './clerkClient';
import { redirect } from 'next/navigation';

interface FamilyCreate extends Omit<family, 'id'> {

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

  await prisma.family.create(
    {
      data: {
        ...family,
        users: {
          create: {
            user_id: user.id
          }
        },
      }
    }
  )
}

export const searchFamilyMember = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user')
  

  const newMemberEmail = input.get('email') as string

  // get the family Id from the form data, it is a hidden field in the form
  const familyId = input.get('familyId') as string

  const trimmedEmail = newMemberEmail.trim()

  const result = await clerkClient.users.getUserList({emailAddress: [trimmedEmail]})
  const newMember = result.data[0]

  const resultId = newMember.id
  console.log(resultId, "resultId")

  redirect(`/pufflings/family/${familyId}/memberSearchResult/${resultId}`)
}

export const addFamilyMember = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user')

  const newMemberEmail = input.get('email') as string
  const trimmedEmail = newMemberEmail.trim()
  const family_id = input.get('familyId') as string || ''

  if(!family_id || !newMemberEmail) throw new Error('yikes')

  const result = await clerkClient.users.getUserList({emailAddress: [trimmedEmail]})
  
  // should have one result in a list.
  //https://clerk.com/docs/references/backend/user/get-user-list#get-user-list
  const newMember = result.data[0]

  await prisma.family_user.create({
    data: {
      family_id: parseInt(family_id),
      user_id: newMember.id
    }
  })
}
