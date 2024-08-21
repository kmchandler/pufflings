"use server";
import prisma from '@/lib/db'

export const getDiaper = async (diaperId: number) => {
  return await prisma.diaper.findUnique({
    where: {id: diaperId},
    include: {
    }
  })
}
