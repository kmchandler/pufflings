import { getSleep, deleteSleep } from '@/lib/sleep';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import BackButton from '@/app/ui/backButton';
import SubmitButton from '@/app/ui/submitButton';

export default async function Sleeps({
  params: { sleepId, childId },
}: {
  params: { sleepId: string; childId: string };
}) {
  const sleepInfo = await getSleep(parseInt(sleepId));

  const dateTimeStart = sleepInfo?.start_time;

  const dateTimeEnd = sleepInfo?.end_time as Date;

  return (
    <div className='flex flex-col'>
      <div className='mt-36 self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        single sleep info
      </div>
      <div className='w-fit self-center'>
        <BackButton />
      </div>
      <div className='transition-duration-100 w-68 mb-4 mt-6 flex flex-col self-center rounded bg-tea-green px-4 py-2 text-left text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
        <div className='text-2xl'>
          start time: {dateFormatter.format(dateTimeStart)}{' '}
          {timeFormatter.format(dateTimeStart).toLowerCase()}
        </div>
        <div className='text-2xl'>
          end time: {dateFormatter.format(dateTimeEnd)}{' '}
          {timeFormatter.format(dateTimeEnd).toLowerCase()}
        </div>
      </div>
      <form action={deleteSleep} className='self-center'>
        <input name='sleepId' value={sleepId} hidden />
        <input name='childId' value={childId} hidden />
        <SubmitButton message='remove sleep' />
      </form>
    </div>
  );
}
