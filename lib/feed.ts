'use server';
import prisma from '@/lib/db';
import { feed, Prisma } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getFamily } from './utils';

export const getFeed = async (feedId: number) => {
  return await prisma.feed.findUnique({
    where: { id: feedId },
    include: {},
  });
};

export const logBottleStart = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const childId: number = Number(inputChildId);

  const feed = await prisma.feed.create({
    data: {
      start_time: new Date(),
      child_id: childId,
      user_id: user.id,
    },
  });

  redirect(
    `/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/bottleFeed/endBottle`
  );
};

export const logBottleEnd = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId');
  if (!inputFeedId) return;

  const childId: number = Number(inputChildId);
  const feedId: number = Number(inputFeedId);

  const feed = await prisma.feed.update({
    where: { id: feedId },
    data: {
      end_time: new Date(),
    },
  });

  redirect(
    `/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/bottleFeed/addBottle`
  );
};

export const createBottle = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId');
  if (!inputFeedId) return;

  const inputAmount = input.get('amount');
  if (!inputAmount) return;

  const childId: number = Number(inputChildId);
  const feedId: number = Number(inputFeedId);
  const amount: number = Number(inputAmount);

  const feed = await prisma.feed.update({
    where: { id: feedId },
    data: {
      amount: new Prisma.Decimal(amount),
    },
  });

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`);
};

export const logSolidStart = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const childId: number = Number(inputChildId);

  const feed = await prisma.feed.create({
    data: {
      start_time: new Date(),
      child_id: childId,
      user_id: user.id,
    },
  });

  redirect(
    `/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/solidsFeed/endSolids`
  );
};

export const logSolidEnd = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId');
  if (!inputFeedId) return;

  const childId: number = Number(inputChildId);
  const feedId: number = Number(inputFeedId);

  const feed = await prisma.feed.update({
    where: { id: feedId },
    data: {
      end_time: new Date(),
    },
  });

  redirect(
    `/pufflings/family/${family.id}/child/${childId}/feeds/${feed.id}/solidsFeed/addSolids`
  );
};

export const createSolid = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const inputChildId = input.get('childId');
  if (!inputChildId) return;

  const inputFeedId = input.get('feedId');
  if (!inputFeedId) return;

  const inputType = input.get('type');
  if (!inputType) return;

  const inputAmount = input.get('amount');
  if (!inputAmount) return;

  const inputFlavor = input.get('flavor');
  if (!inputFlavor) return;

  const inputNotes = input.get('notes');
  if (!inputNotes) return;

  const feedType = String('solid');
  const childId: number = Number(inputChildId);
  const feedId: number = Number(inputFeedId);
  const type: string = String(inputType);
  const amount: number = Number(inputAmount);
  const flavor: string = String(inputFlavor);
  const notes: string = String(inputNotes);

  const feed = await prisma.feed.update({
    where: { id: feedId },
    data: {
      feedType: feedType,
      solidType: type,
      amount: new Prisma.Decimal(amount),
      flavor: flavor,
      notes: notes,
    },
  });

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`);
};

export const lastCreatedFeed = async (childId: string) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;
  const feed = await prisma.feed.findMany({
    where: { end_time: undefined },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  const activeFeed: feed = feed[0];

  if (activeFeed && !activeFeed.end_time) {
    redirect(
      `/pufflings/family/${family.id}/child/${childId}/feeds/${activeFeed.id}/endFeed`
    );
  }
};

export const editBottle = async (input: FormData) => {
  const family = await getFamily();
  const childId = input.get('childId');
  const feedId = input.get('feedId');

  if (!feedId) return;

  const id = Number(feedId);

  const inputAmount = input.get('amount');
  if (!inputAmount) return;

  const amount: number = Number(inputAmount);

  const feed = await prisma.feed.update({
    where: { id: parseInt(feedId.toString()) },
    data: {
      amount: new Prisma.Decimal(amount),
    },
  });

  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`);
};

export const deleteBottle = async (input: FormData) => {
  const family = await getFamily();
  const childId = input.get('childId');
  const feedId = input.get('feedId');

  if (!feedId) return;

  const id = Number(feedId);

  await prisma.feed.delete({
    where: {
      id,
    },
  });
  redirect(`/pufflings/family/${family.id}/child/${childId}/feeds`);
};

export const getPagedFeeds = async (childId: number, page: number) => {
  const skip = page <= 1 ? 0 : (page - 1) * 10;
  const take = 10;
  return await prisma.feed.findManyAndCount({
    where: { child_id: childId },
    orderBy: {
      start_time: 'desc',
    },
    skip,
    take,
  });
};

export const getLastFeed = async (childId: number) => {
  return await prisma.feed.findMany({
    where: { child_id: childId },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });
};

export const getFeedChart = async (childId: string, filter: string) => {
  const results = await prisma.feed.findMany({
    where: {
      child_id: parseInt(childId),
      start_time: { gte: new Date(filter) },
    },
    orderBy: {
      start_time: 'asc',
    },
    select: {
      start_time: true,
      amount: true,
    },
  });

  return [
    {
      id: 'feed',
      data: results.map((result) => {
        return {
          x: result.start_time,
          y: result.amount?.toNumber(),
        };
      }),
    },
  ];
};
