import { getChildWithNested } from '@/lib/child';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faPoop } from '@fortawesome/free-solid-svg-icons';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import BackToChildButton from '@/app/ui/backToChildButton';

export default async function Diapers({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) {
  const childInfo = await getChildWithNested(parseInt(childId));

  const diaperInfo = childInfo?.diapers;

  const peeIcon = <FontAwesomeIcon icon={faDroplet} />;
  const poopIcon = <FontAwesomeIcon icon={faPoop} />;

  return (
    <div className='mt-5 flex flex-col'>
      <div className='text-ut-orange self-center text-6xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        diapers
      </div>
      <div className='flex flex-row self-center'>
        <BackToChildButton childId={childId} id={id} />
        <div className='transition-duration-100 mb-4 ml-4 mt-4 flex flex-col self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/diapers/addDiaper`}
          >
            add diaper
          </Link>
        </div>
      </div>
      <div className='self-center text-3xl'>
        {diaperInfo
          ?.slice()
          .reverse()
          .map((diaper) => {
            const dateTime = diaper.time_of_last_change;

            if (diaper.type === 'pee') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}
                >
                  <div className='flex space-x-3 space-y-3'>
                    <div className='mt-3'>{peeIcon}</div>
                    <div>
                      time: {dateFormatter.format(dateTime)}{' '}
                      {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            } else if (diaper.type === 'poop') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}
                >
                  <div className='flex space-x-3 space-y-3'>
                    <div className='mt-3'>{poopIcon}</div>
                    <div>
                      time: {dateFormatter.format(dateTime)}{' '}
                      {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            } else if (diaper.type === 'pee:poop') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}
                >
                  <div className='flex space-x-3 space-y-3'>
                    <div className='mt-3'>
                      {peeIcon}
                      {poopIcon}
                    </div>
                    <div>
                      time: {dateFormatter.format(dateTime)}{' '}
                      {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            }
          })}
      </div>
    </div>
  );
}
