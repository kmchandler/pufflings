import { getDiaper, deleteDiaper } from '@/lib/diaper';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faPoop } from '@fortawesome/free-solid-svg-icons';
import BackButton from '@/app/ui/backButton';
import SubmitButton from '@/app/ui/submitButton';

const iconMap: any = {
  pee: <FontAwesomeIcon icon={faDroplet} />,
  poop: <FontAwesomeIcon icon={faPoop} />,
  'pee:poop': (
    <>
      <FontAwesomeIcon icon={faDroplet} />
      <FontAwesomeIcon icon={faPoop} />
    </>
  ),
};

export default async function Diapers({
  params: { childId, diaperId },
}: {
  params: { childId: string; diaperId: string };
}) {
  const diaperInfo = await getDiaper(parseInt(diaperId));

  const dateTime = diaperInfo?.time_of_last_change;

  if (!diaperInfo) return;

  return (
    <div>
      <div className='mt-30 flex flex-col'>
        <div className='text-ut-orange self-center text-6xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
          diaper
        </div>
        <div className='w-fit self-center'>
          <BackButton />
        </div>
        <div className='mb-5 mt-5 flex space-x-3 self-center text-3xl'>
          <div>{iconMap[diaperInfo.type]}</div>
          <div>
            time: {dateFormatter.format(dateTime)}{' '}
            {timeFormatter.format(dateTime).toLowerCase()}
          </div>
        </div>
        <form action={deleteDiaper} className='flex justify-center'>
          <input name='childId' value={childId} hidden />
          <input name='diaperId' value={diaperInfo.id} hidden />
          <SubmitButton message='delete diaper' />
        </form>
      </div>
    </div>
  );
}
