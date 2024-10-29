"use server";
import prisma from '@/lib/db'
import { diaper } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
interface DiaperCreate extends Omit<diaper, 'id'> {

}

export const getDiaper = async (diaperId: number) => {
  return await prisma.diaper.findUnique({
    where: {id: diaperId},
    include: {
    }
  })
}


export const createDiaper = async (input: FormData) => { console.log(input)
  const user = await currentUser();
  if (!user) throw new Error('no user')

    const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const pee: string = input.get('pee') as string || '';
  const poop: string = input.get('poop') as string || '';
  const childId: number = Number(inputChildId)

  const type = pee && poop ? 'pee:poop' : pee ? 'pee' : 'poop'

  await prisma.diaper.create({data: {
    time_of_last_change:  new Date(),
    type: type,
    child_id: childId,
    user_id: user.id,
  }})
  redirect(`/pufflings/family/${family.id}/child/${childId}/diapers`)
}
