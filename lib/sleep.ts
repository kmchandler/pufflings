"use server";
import prisma from '@/lib/db'

export const getSleep = async (sleepId: number) => {
  return await prisma.sleep.findUnique({
    where: {id: sleepId},
    include: {
    }
  })
}
