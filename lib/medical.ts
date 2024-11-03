"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import { medical } from '@prisma/client';

export const getMedical = async (medicalId: number) => {
  return await prisma.medical.findUnique({
    where: {id: medicalId},
    include: {
    }
  })
}

export const createMedical = async (input: FormData) => { 
  console.log(input)
  // const user = await currentUser();
  // if (!user) throw new Error('no user')

  //   const family = await prisma.family.findUniqueOrThrow({
  //     where: {user_id: user.id}
  //   })

  // const inputChildId = input.get('childId')
  // if (!inputChildId) return;

  // const type: string = input.get('type') as string || '';
  // const notes: string = input.get('notes') as string || '';
  // const childId: number = Number(inputChildId)


  // await prisma.medical.create({data: {
  //   type: type,
  //   notes: notes,
  //   child_id: childId,
  //   user_id: user.id,
  // }})
  // redirect(`/pufflings/family/${family.id}/child/${childId}/medical`)
}
