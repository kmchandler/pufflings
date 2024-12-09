'use server';
import prisma from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { diaper, feed, sleep } from '@prisma/client';

export type LastFeed = {
  timeSince: String;
} & feed;

export type LastSleep = {
  timeSince: String;
} & sleep;

export type LastDiaper = {
  timeSince: String;
} & diaper;

export const fetchDashboardForUser = async () => {
  const user = await currentUser();
  // handle the case where there is no user
  if (!user || !user.id) {
    throw new Error('no user found');
  }

  const familyUser = await prisma.family_user.findFirst({
    where: { user_id: user?.id },
    include: {
      family: {
        include: {
          children: {
            include: {
              feeds: true,
              diapers: true,
              medicals: true,
              sleeps: true,
            },
          },
        },
      },
    },
  });

  return familyUser?.family;
};

export const getChildDashboard = async (childId: number) => {
  const results = await prisma.child.findUnique({
    where: { id: childId },
    include: {
      feeds: {
        orderBy: {
          id: 'desc',
        },
        take: 1,
      },
      diapers: {
        orderBy: {
          id: 'desc',
        },
        take: 1,
      },
      sleeps: {
        orderBy: {
          id: 'desc',
        },
        take: 1,
      },
    },
  });

  const lastFeed = results?.feeds[0];
  const lastSleep = results?.sleeps[0];
  const lastDiaper = results?.diapers[0];

  return {
    lastFeed: formatWithLastFeed(lastFeed),
    lastSleep,
    lastDiaper: formatWithLastDiap(lastDiaper),
  };
};

const formatWithLastFeed = (lastObject: feed | undefined) => {
  if (lastObject) {
    return {
      ...lastObject,
      timeSince: timeSinceLast(lastObject.start_time),
    };
  }

  return lastObject;
};

const formatWithLastDiap = (lastObject: diaper | undefined) => {
  if (lastObject) {
    return {
      ...lastObject,
      timeSince: timeSinceLast(lastObject.time_of_last_change),
    };
  }

  return lastObject;
};

export const timeSinceLast = (lastTime: Date) => {
  const current = new Date();

  const lastDateTime = new Date(lastTime);

  return (Math.abs(current.getTime() - lastDateTime.getTime()) / 36e5).toFixed(
    1
  );
};
