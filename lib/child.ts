"use server";
import prisma from '@/lib/db'

export const getChild = async (childId: number) => {
  return await prisma.child.findUnique({
    where: {id: childId},
    include: {
      feeds: true,
      medicals: true,
      sleeps: true,
      diapers: true
    }
  })
}
