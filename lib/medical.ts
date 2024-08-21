"use server";
import prisma from '@/lib/db'

export const getMedical = async (medicalId: number) => {
  return await prisma.medical.findUnique({
    where: {id: medicalId},
    include: {
    }
  })
}
