"use server";
import prisma from '@/lib/db'
import { Prisma } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';

export const getFeed = async (feedId: number) => {
  return await prisma.feed.findUnique({
    where: {id: feedId},
    include: {
    }
  })
}


export const logFeedStart = async (input: FormData) => { 

  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const childId: number = Number(inputChildId)

  const feed = await prisma.feed.create({data: {
    start_time: new Date(),
    child_id: childId,
    user_id: user.id,
  }})

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/endFeed`)
}

export const logFeedEnd = async (input: FormData) => { 

  const user = await currentUser();
  if (!user) throw new Error('no user')

  const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId')
  if (!inputFeedId) return;

  const childId: number = Number(inputChildId)
  const feedId: number = Number(inputFeedId)

  const feed = await prisma.feed.update({
      where: {id: feedId},
      data: {
        end_time: new Date(),
  }})

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/addFeed`)
}

export const createFeed = async (input: FormData) => { 

  const user = await currentUser();
  if (!user) throw new Error('no user')

    const family = await prisma.family.findUniqueOrThrow({
      where: {user_id: user.id}
    })

  const inputChildId = input.get('childId')
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId')
  if (!inputFeedId) return;

  const inputAmount = input.get('amount')
  if (!inputAmount) return;

  const childId: number = Number(inputChildId)
  const feedId: number = Number(inputFeedId)
  const amount: number = Number(inputAmount);

  const feed = await prisma.feed.update({
      where: {id: feedId},
      data: {
        amount: new Prisma.Decimal(amount),
  }})

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`)
}
