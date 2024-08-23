"use server";
import prisma from '@/lib/db'

export const getFamily = async (FamilyId: number) => {
  return await prisma.family.findUnique({
    where: {id: FamilyId},
    include: {
      children: true,
    }
  })
}
