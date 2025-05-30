'use server';
import prisma from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const createHeight = async (input: FormData) => {
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

  const feet: string = (input.get('feet') as string) || '';
  const inches: string = (input.get('inches') as string) || '';
  const childId: number = Number(inputChildId);

  await prisma.height.create({
    data: {
      feet: feet,
      inches: inches,
      child_id: childId,
    },
  });
  redirect(`/pufflings/family/${family.id}/child/${childId}/profile`);
};

export const lastCreatedHeight = async (childId: string) => {
  const childIdNum: number = Number(childId);

  const height = await prisma.height.findMany({
    where: { child_id: childIdNum },
    orderBy: {
      id: 'desc',
    },
    take: 1,
  });

  const currentHeight = height[0];
  return currentHeight;
};
