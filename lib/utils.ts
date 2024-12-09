import prisma from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

export const getFamily = async () => {
  const user = await currentUser();
  if (!user) throw new Error('no user');

  const familyUser = await prisma.family_user.findFirstOrThrow({
    where: { user_id: user.id },
    include: {
      family: true,
    },
  });

  return familyUser.family;
};
