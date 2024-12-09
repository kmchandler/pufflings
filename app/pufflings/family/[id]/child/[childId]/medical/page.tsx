import { getChild } from '@/lib/child';
import Link from 'next/link';
import { dateFormatter } from '@/lib/dateFormatter';
import { timeFormatter } from '@/lib/timeFormatter';
import BackButton from '@/app/ui/backButton';

export default async function Medicals({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) {
  const childInfo = await getChild(parseInt(childId));

  const medicalInfo = childInfo?.medicals;

  return (
    <div>
      <div className='mt-5 flex flex-col'>
        <div className='self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
          medical
        </div>
        <div className='flex flex-row self-center'>
          <BackButton />
          <div className='transition-duration-100 mb-4 ml-4 mt-4 flex flex-col rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'>
            <Link
              href={`/pufflings/family/${id}/child/${childId}/medical/addMedical`}
            >
              add medical
            </Link>
          </div>
        </div>
        <div className='flex flex-row space-x-3 self-center text-3xl'>
          {medicalInfo
            ?.slice()
            .reverse()
            .map((medical) => {
              const dateTime = medical?.time;
              return (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/pufflings/family/${id}/child/${childId}/medical/${medical.id}`}
                  className='transition-duration-100 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
                >
                  <div className='flex w-48 flex-col flex-wrap space-x-3 self-center text-3xl'>
                    <div className='ml-3'>{dateFormatter.format(dateTime)}</div>
                    <div>
                      time: {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                    <div className='ml-3'>type: {medical.type}</div>
                    <div>notes: {medical.notes}</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
