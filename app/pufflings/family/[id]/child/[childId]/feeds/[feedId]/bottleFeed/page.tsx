import { deleteFeed, getFeed } from '@/lib/feed';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import BackButton from '@/app/ui/backButton';
import SubmitButton from '@/app/ui/submitButton';
import Link from 'next/link';

export default async function BottleFeeds({
  params: { childId, feedId, id },
}: {
  params: { childId: string; feedId: string; id: string };
}) {
  const feedInfo = await getFeed(parseInt(feedId));

  const dateTimeStart = feedInfo?.start_time;

  const dateTimeEnd = feedInfo?.end_time as Date;

  return (
    <div className='mt-36 flex flex-col'>
      <div className='text-ut-orange[text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] self-center text-6xl'>
        feed
      </div>
      <div className='w-fit self-center'>
        <BackButton />
      </div>
      <div className='transition-duration-100 w-68 mb-4 mt-6 flex flex-col self-center rounded bg-tea-green px-4 py-2 text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
        <div className='flex flex-col items-start space-y-2 text-left'>
          <div>
            start time: {dateFormatter.format(dateTimeStart)}{' '}
            {timeFormatter.format(dateTimeStart).toLowerCase()}
          </div>
          <div>
            end time: {dateFormatter.format(dateTimeEnd)}{' '}
            {timeFormatter.format(dateTimeEnd).toLowerCase()}
          </div>
          <div>amount: {feedInfo?.bottleAmount?.toFixed()} oz</div>
        </div>
      </div>
      <div className='mt-7 flex flex-row items-center justify-center'>
        <Link
          className='transition-duration-100 mr-5 mt-7 flex w-fit flex-col self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition-all hover:drop-shadow-xl disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400'
          href={`/pufflings/family/${id}/child/${childId}/feeds/${feedId}/bottleFeed/editBottle`}
        >
          edit feed
        </Link>
        <form action={deleteFeed} className='self-center'>
          <input name='childId' value={childId} hidden />
          <input name='feedId' value={feedId} hidden />
          <SubmitButton message='remove feed' />
        </form>
      </div>
    </div>
  );
}
