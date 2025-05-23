import { deleteMedical, getMedical } from '@/lib/medical';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import SubmitButton from '@/app/ui/submitButton';
import BackToChildButton from '@/app/ui/backToChildButton';

export default async function Medical({
  params: { childId, medicalId, id },
}: {
  params: { childId: string; medicalId: string; id: string };
}) {
  const medicalInfo = await getMedical(parseInt(medicalId));

  const dateTime = medicalInfo?.time;

  return (
    <div className='mt-36 flex flex-col'>
      <div className='text-ut-orange self-center text-6xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        medical
      </div>
      <div className='w-fit self-center'>
        <BackToChildButton childId={childId} id={id} />
      </div>
      <div className='transition-duration-100 mt-4 flex w-56 flex-col self-center rounded bg-tea-green px-4 py-2 text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
        <div className='ml-1'>{dateFormatter.format(dateTime)}</div>
        <div>time: {timeFormatter.format(dateTime).toLowerCase()}</div>
        <div>type: {medicalInfo?.type}</div>
        <div>notes: {medicalInfo?.notes}</div>
      </div>
      <form action={deleteMedical} className='self-center'>
        <input name='childId' value={childId} hidden />
        <input name='medicalId' value={medicalId} hidden />
        <SubmitButton message='delete medical' />
      </form>
    </div>
  );
}
