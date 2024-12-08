"use server";
import prisma from '@/lib/db'
import { feed, Prisma } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import { getFamily } from './utils';

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

  const familyUser = await prisma.family_user.findFirstOrThrow({
      where: {user_id: user.id},
      include: {
        family: true
      }
    })

  const family = familyUser.family

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

  const familyUser = await prisma.family_user.findFirstOrThrow({
      where: {user_id: user.id},
      include: {
        family: true
      }
    })

  const family = familyUser.family

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

    const familyUser = await prisma.family_user.findFirstOrThrow({
      where: {user_id: user.id},
      include: {
        family: true
      }
    })

    const family = familyUser.family

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

export const deleteFeed = async (input: FormData) => {
  const family = await getFamily()
  const childId = input.get('childId')
  const feedId = input.get('feedId')

  if (!feedId) return

  const id = Number(feedId)

  await prisma.feed.delete({
    where: {
      id
    }
  })
  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`)
}

export const getPagedFeeds = async (childId: number, page: number) => {
  const skip = page <= 1 ? 0 : (page - 1) * 10
  const take = 10
  return await prisma.feed.findManyAndCount({
    where: {child_id: childId},
    orderBy: {
      start_time: 'desc'
    },
    skip,
    take
  })
}

export const getLastFeed = async (childId: number) => {
  return await prisma.feed.findMany({
    where: {child_id: childId},
    orderBy: {
      id: 'desc'
    },
    take: 1
  })
}
