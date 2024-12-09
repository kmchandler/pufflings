'use client';

import Link from 'next/link';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import { feed } from '@prisma/client';

const FeedCard = ({
  id,
  childId,
  feed,
}: {
  id: string;
  childId: string;
  feed: feed;
}) => {
  const dateTimeStart = new Date(feed.start_time);
  const dateTimeData = feed.end_time as Date;
  const dateTimeEnd = new Date(dateTimeData);
  return (
    <Link
      href={`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`}
      className='transition-duration-100 mb-6 flex w-72 flex-col self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
    >
      <div className='text-left text-2xl'>
        <div>
          start time: {dateFormatter.format(dateTimeStart)}{' '}
          {timeFormatter.format(dateTimeStart).toLowerCase()}
        </div>
        <div>
          end time: {dateFormatter.format(dateTimeEnd)}{' '}
          {timeFormatter.format(dateTimeEnd).toLowerCase()}
        </div>
        <div>amount: {feed?.amount?.toString()} oz</div>
      </div>
    </Link>
  );
};

export default FeedCard;
