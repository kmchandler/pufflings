'use client';

import { LastDiaper, LastFeed, LastSleep } from '@/lib/dashboard';
import Link from 'next/link';

const Recents = ({
  familyId,
  childId,
  lastFeed,
  lastSleep,
  lastDiaper,
}: {
  familyId: string;
  childId: string;
  lastFeed: LastFeed;
  lastSleep: LastSleep;
  lastDiaper: LastDiaper;
}) => {
  return (
    <>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        <div className='overflow-hidden rounded-lg bg-white shadow'>
          <div className='flex px-4 py-5 sm:p-6'>
            <div className='left-0 flex flex-col text-left'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                last feed
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastFeed?.timeSince} hrs ago
              </dd>
            </div>
            <div className='flex grow'>&nbsp;</div>
            <div className='right-0 flex flex-col text-right'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                amount
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastFeed?.amount?.toString()} oz
              </dd>
            </div>
          </div>
          <div className='bg-tea-green'>
            <Link
              href={`/pufflings/family/${familyId}/child/${childId}/feeds/startFeed`}
              className='transition-duration-100 w-26 mt-3 flex flex-col self-center rounded px-2 py-1 text-center text-xl text-oxford-blue transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
            >
              start new feed
            </Link>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white shadow'>
          <div className='flex px-4 py-5 sm:p-6'>
            <div className='left-0 flex flex-col text-left'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                last diaper
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastDiaper?.timeSince} hrs ago
              </dd>
            </div>
            <div className='flex grow'>&nbsp;</div>
            <div className='right-0 flex flex-col text-right'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                type
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastDiaper?.type}
              </dd>
            </div>
          </div>

          <div className='bg-tea-green'>
            <Link
              href={`/pufflings/family/${familyId}/child/${childId}/diapers/addDiaper`}
              className='transition-duration-100 w-26 mt-3 flex flex-col self-center rounded px-2 py-1 text-center text-xl text-oxford-blue transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
            >
              add diaper
            </Link>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg bg-white shadow'>
          <div className='flex px-4 py-5 sm:p-6'>
            <div className='left-0 flex flex-col text-left'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                last sleep start
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastSleep?.start_time.toLocaleTimeString()}
              </dd>
            </div>
            <div className='flex grow'>&nbsp;</div>
            <div className='right-0 flex flex-col text-right'>
              <dt className='truncate text-sm font-medium text-gray-500'>
                last sleep end
              </dt>
              <dd className='mt-1 text-3xl font-semibold tracking-tight text-gray-900'>
                {lastSleep?.end_time?.toLocaleTimeString()}
              </dd>
            </div>
          </div>

          <div className='bg-tea-green'>
            <Link
              href={`/pufflings/family/${familyId}/child/${childId}/sleeps/startSleep`}
              className='transition-duration-100 w-26 mt-3 flex flex-col self-center rounded px-2 py-1 text-center text-xl text-oxford-blue transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
            >
              start new sleep
            </Link>
          </div>
        </div>
      </dl>
    </>
  );
};

export default Recents;
