"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import { sleep } from '@prisma/client';
import { redirect } from 'next/navigation';

export const getSleep = async (sleepId: number) => {
  return await prisma.sleep.findUnique({
    where: {id: sleepId},
    include: {
    }
  })
}

export const lastCreatedSleep = async (childId: string) => {

  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })
  const sleep = await prisma.sleep.findMany({
    where: {end_time: undefined},
    orderBy: {
      id: 'desc',
    },
    take: 1,
  })
  
  const activeSleep: sleep = sleep[0]

  if (!activeSleep || !activeSleep.end_time){
    redirect(`/pufflings/family/${family.id}/child/${childId}/sleeps/${activeSleep.id}/endSleep`)
  }
}

export const logSleepStart = async (input: FormData) => { 

  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const childId: number = Number(inputChildId)

  const sleep = await prisma.sleep.create({data: {
    start_time: new Date(),
    child_id: childId,
    user_id: user.id,
  }})

  redirect(`/pufflings/family/${family.id}/child/${childId}/sleeps/${sleep.id}/endSleep`)
}

export const createSleep = async (input: FormData) => { 

  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const inputSleepId = input.get('sleepId')
  if (!inputSleepId) return;

  const childId: number = Number(inputChildId)
  const sleepId: number = Number(inputSleepId)

  const sleep = await prisma.sleep.update({
      where: {id: sleepId},
      data: {
        end_time: new Date(),
  }})

  
  redirect(`/pufflings/family/${family.id}/child/${childId}/sleeps`)
}

export const deleteSleep = async (input: FormData) => {
  const sleepId = input.get('sleepId')
  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')


  if (!sleepId) return
  const sleepIdToDelete = Number(sleepId)

  await prisma.sleep.delete({
    where: {id: sleepIdToDelete}
  })

  redirect(`/pufflings/family/${family.id}/child/${inputChildId}/sleeps`)
}
