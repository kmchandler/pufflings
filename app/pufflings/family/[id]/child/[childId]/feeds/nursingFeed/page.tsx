import Link from 'next/link';
import BackButton from '@/app/ui/backButton';

export default async function nursingFeed({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
  searchParams: { page: string };
}) {
  return (
    <div className='mt-5 flex flex-col'>
      <div className='self-center text-6xl text-oxford-blue [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        nursing
      </div>
      <div className='flex w-fit flex-col self-center'>
        <div className='flex flex-row self-center'>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed/startNursing`}
            className='transition-duration-100 w-fill mb-4 mt-4 flex rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
          >
            start feed
          </Link>
        </div>
        <div className='self-center'>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
