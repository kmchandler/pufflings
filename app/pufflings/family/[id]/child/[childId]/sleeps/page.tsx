import { getChildWithNested } from '@/lib/child';
import Link from 'next/link';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import { lastCreatedSleep } from '@/lib/sleep';
import BackButton from '@/app/ui/backButton';

export default async function Sleeps({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) {
  const childInfo = await getChildWithNested(parseInt(childId));

  const sleepInfo = childInfo?.sleeps;

  await lastCreatedSleep(childId);

  return (
    <div className='mt-5 flex flex-col items-center'>
      <div className='text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        sleeps
      </div>
      <div className='flex flex-row'>
        <BackButton />
        <div className='transition-duration-100 mb-4 ml-4 mt-4 flex rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/sleeps/startSleep`}
          >
            add sleep
          </Link>
        </div>
      </div>
      <div className='mt-2 flex flex-wrap justify-center space-x-5 text-3xl'>
        {sleepInfo
          ?.slice()
          .reverse()
          .map((sleep) => {
            const dateTimeStart = sleep.start_time;
            const dateTimeEnd = sleep.end_time as Date;
            return (
              // eslint-disable-next-line react/jsx-key
              <Link
                href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`}
                className='transition-duration-100 w-68 mb-6 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
              >
                <div className='flex flex-col items-start text-left text-2xl'>
                  <div className='mt-3'>
                    start time: {dateFormatter.format(dateTimeStart)}{' '}
                    {timeFormatter.format(dateTimeStart).toLowerCase()}
                  </div>
                  <div className='mt-3'>
                    end time: {dateFormatter.format(dateTimeEnd)}{' '}
                    {timeFormatter.format(dateTimeEnd).toLowerCase()}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
