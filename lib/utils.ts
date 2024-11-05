import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

export const getFamily = async () => {
  const user = await currentUser();
  if (!user) throw new Error('no user')

  return await prisma.family.findUniqueOrThrow({
    where: {user_id: user.id}
  })
}
