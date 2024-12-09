'use server';
import prisma from '@/lib/db';
import { child } from '@prisma/client';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

interface ChildCreate extends Omit<child, 'id'> {}

export const getChild = async (childId: number) => {
  return await prisma.child.findUnique({
    where: { id: childId },
    include: {
      feeds: {
        orderBy: {
          end_time: 'desc',
        },
      },
      medicals: true,
      sleeps: true,
      diapers: true,
    },
  });
};

export const createChild = async (input: FormData) => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  const family = familyUser.family;

  const name: string = (input.get('name') as string) || '';
  const birthdayInput: string = (input.get('birthday') as string) || '';

  if (!birthdayInput) return;

  const birthday = new Date(birthdayInput);

  const child: ChildCreate = {
    name: name,
    birthday: birthday,
    family_id: family.id,
  };

  await prisma.child.create({ data: child });

  redirect(`/pufflings/family/${family.id}`);
};

export const deleteChild = async (childId: number, family_id: string) => {
  await prisma.child.delete({
    where: {
      id: childId,
    },
  });
  redirect(`/pufflings/family/${family_id}`);
};
