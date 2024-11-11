"use server";
import prisma from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'

export const fetchDashboardForUser = async () => {
  const user = await currentUser()
  // handle the case where there is no user
  if(!user || !user.id) {
    throw new Error('no user found')
  }

  const familyUser = await prisma.family_user.findFirst({
    where: {user_id: user?.id},
    include: {
      family: {
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
      }
    }
  })

  return familyUser?.family
}
