"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

export const fetchDashboardForUser = async () => {
  const user = await currentUser()
  // handle the case where there is no user

  if(!user || !user.id) {
    throw new Error('no user found')
  }

  return await prisma.family.findUnique({
    where: {user_id: user?.id},
    include: {
      children: {
        include: {
          feeds: true,
          diapers: true,
          medicals: true,
          sleeps: true
        }
      }
    }
  })
}
