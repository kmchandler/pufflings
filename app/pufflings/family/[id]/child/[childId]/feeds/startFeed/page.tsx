import Link from 'next/link';

const startFeed = ({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) => {
  return (
    <div className='flex flex-row justify-center'>
      <Link
        href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed/startBottle`}
        className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        bottle
      </Link>
      <Link
        href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed/startSolid`}
        className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        solid
      </Link>
      <Link
        href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed/startNursing`}
        className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        nursing
      </Link>
    </div>
  );
};

export default startFeed;
