"use server";
import prisma from '@/lib/db'

export const getFeed = async (feedId: number) => {
  return await prisma.feed.findUnique({
    where: {id: feedId},
    include: {
    }
  })
}
