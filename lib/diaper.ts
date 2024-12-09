'use server';
import prisma from '@/lib/db';
import { diaper } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getFamily } from './utils';

interface DiaperCreate extends Omit<diaper, 'id'> {}

export const getDiaper = async (diaperId: number) => {
  return await prisma.diaper.findUnique({
    where: { id: diaperId },
    include: {},
  });
};

export const createDiaper = async (input: FormData) => {
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

  const pee: string = (input.get('pee') as string) || '';
  const poop: string = (input.get('poop') as string) || '';
  const childId: number = Number(inputChildId);

  const type = pee && poop ? 'pee:poop' : pee ? 'pee' : 'poop';

  await prisma.diaper.create({
    data: {
      time_of_last_change: new Date(),
      type: type,
      child_id: childId,
      user_id: user.id,
    },
  });
  redirect(`/pufflings/family/${family.id}/child/${childId}/diapers`);
};

export const deleteDiaper = async (input: FormData) => {
  const family = await getFamily();
  const childId = input.get('childId');
  const diaperId = input.get('diaperId');
  const id = Number(diaperId);
  await prisma.diaper.delete({
    where: {
      id,
    },
  });
  redirect(`/pufflings/family/${family.id}/child/${childId}/diapers`);
};
