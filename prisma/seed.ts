import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const goldsmith = await prisma.family.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      family_name: 'Goldsmith',
    },
  })
  const landry = await prisma.family.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      family_name: 'Landry',
    },
  })
  const mandy_goldsmith = await prisma.user_family.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      user_id: 1,
      family_id: 1,
    },
  })
  const sarah_landry = await prisma.user_family.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      user_id: 2,
      family_id: 2,
    },
  })
  const gus = await prisma.child.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      family_id: 1,
      name: 'Gus',
    },
  })
  const ozzie = await prisma.child.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      family_id: 1,
      name: 'Ozzie',
    },
  })
  const lemmie = await prisma.child.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      family_id: 2,
      name: 'Lemmie',
    },
  })
  const diaper1 = await prisma.diaper.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      child_id: 1,
      time_of_last_change: new Date('2024-08-16 08:52:06'),
      user_id: 1,
      type: 'pee',
    },
  })
  const diaper2 = await prisma.diaper.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      child_id: 2,
      time_of_last_change: new Date('2024-08-13 09:57:06'),
      user_id: 1,
      type: 'pee',
    },
  })
  const diaper3 = await prisma.diaper.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      child_id: 3,
      time_of_last_change: new Date('2024-08-12 09:50:06'),
      user_id: 2,
      type: 'poop',
    },
  })
  const diaper4 = await prisma.diaper.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      child_id: 1,
      time_of_last_change: new Date('2024-08-13 07:06'),
      user_id: 1,
      type: 'pee',
    },
  })
  const feed1 = await prisma.feed.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      child_id: 1,
      start_time: new Date('2024-08-11 09:52:06'),
      end_time: new Date('2024-08-11 10:32:06'),
      amount: 8.4,
      user_id: 1
    },
  })
  const feed2 = await prisma.feed.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      child_id: 2,
      start_time: new Date('2024-08-15 09:52:06'),
      end_time: new Date('2024-08-15 10:35:06'),
      amount: 6.3,
      user_id: 1
    },
  })
  const feed3 = await prisma.feed.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      child_id: 2,
      start_time: new Date('2024-08-15 09:02:06'),
      end_time: new Date('2024-08-15 10:05:06'),
      amount: 7.7,
      user_id: 1
    },
  })
  const sleep1 = await prisma.sleep.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      child_id: 1,
      start_time: new Date('2024-08-15 09:52:06'),
      end_time: new Date('2024-08-15 10:35:06'),
      user_id: 1
    },
  })
  const sleep2 = await prisma.sleep.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      child_id: 2,
      start_time: new Date('2024-08-15 09:50:06'),
      end_time: new Date('2024-08-15 10:55:06'),
      user_id: 1
    },
  })
  const sleep3 = await prisma.sleep.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      child_id: 3,
      start_time: new Date('2024-08-15 09:05:06'),
      end_time: new Date('2024-08-15 10:32:06'),
      user_id: 2
    },
  })
  const sleep4 = await prisma.sleep.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      child_id: 3,
      start_time: new Date('2024-08-10 08:05:06'),
      end_time: new Date('2024-08-10 9:42:06'),
      user_id: 2
    },
  })
  const medical1 = await prisma.medical.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      child_id: 1,
      type: 'fever',
      notes: '101.3 fever',
      time: new Date('2024-08-15 09:53:06'),
      user_id: 1
    },
  })
  const medical2 = await prisma.medical.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      child_id: 1,
      type: 'injury',
      notes: 'bonked head on dresser',
      time: new Date('2024-08-12 09:55:06'),
      user_id: 1
    },
  })
  const medical3 = await prisma.medical.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      child_id: 3,
      type: 'injury',
      notes: 'skinned knee',
      time: new Date('2024-08-12 09:55:06'),
      user_id: 2
    },
  })
console.log({ goldsmith, landry, mandy_goldsmith, sarah_landry, gus, ozzie, lemmie, diaper1, diaper2, diaper3, diaper4, feed1, feed2, feed3, sleep1, sleep2, sleep3, sleep4, medical1, medical2, medical3 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
