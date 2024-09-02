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

export const createChild = async (input: FormData) => {
  console.log(input.get('name'))
  // this is where you'll create the child in the database using prisma.
  // primsa.child.create({data: { whatever your child looks like.  }})
}
