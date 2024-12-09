'use server';
import prisma from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getFamily } from './utils';

export const getMedical = async (medicalId: number) => {
  return await prisma.medical.findUnique({
    where: { id: medicalId },
    include: {},
  });
};

export const createMedical = async (input: FormData) => {
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

  const type: string = (input.get('type') as string) || '';
  const notes: string = (input.get('notes') as string) || '';
  const childId: number = Number(inputChildId);

  await prisma.medical.create({
    data: {
      type: type,
      notes: notes,
      child_id: childId,
      user_id: user.id,
    },
  });
  redirect(`/pufflings/family/${family.id}/child/${childId}/medical`);
};

export const deleteMedical = async (input: FormData) => {
  const family = await getFamily();
  const childId = input.get('childId');
  const medicalId = input.get('medicalId');

  if (!medicalId) return;

  const id = Number(medicalId);

  await prisma.medical.delete({
    where: { id },
  });

  redirect(`/pufflings/family/${family.id}/child/${childId}/medical`);
};
