import { getChildWithNested } from '@/lib/child';
import FeedTable from './feedTable';
import Link from 'next/link';
import { feed } from '@prisma/client';
import LastFeed from './lastFeed';
import { getPagedFeeds, getLastFeed, lastCreatedFeed } from '@/lib/feed';
import BackToChildButton from '@/app/ui/backToChildButton';

export default async function Feeds({
  params: { childId, id },
  searchParams: { page },
}: {
  params: { childId: string; id: string };
  searchParams: { page: string };
}) {
  const pageParam = page ? parseInt(page) : 1;
  const lastFeed: feed[] = await getLastFeed(parseInt(childId));
  const [feedInfo, count]: [feed[], number] = await getPagedFeeds(
    parseInt(childId),
    pageParam
  );

  await lastCreatedFeed(childId);

  return (
    <div className='mt-5 flex flex-col'>
      <div className='text-ut-orange self-center text-6xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        feeds
      </div>
      {feedInfo && <LastFeed lastFeed={lastFeed[0]} />}
      <div className='flex w-fit flex-col self-center'>
        <div className='flex flex-row justify-center'>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/feeds/bottleFeed`}
            className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
          >
            bottle
          </Link>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/feeds/solidsFeed`}
            className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
          >
            solids
          </Link>
          <Link
            href={`/pufflings/family/${id}/child/${childId}/feeds/nursingFeed`}
            className='transition-duration-100 w-26 mb-4 ml-4 mt-4 flex justify-center self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
          >
            nursing
          </Link>
        </div>
        <BackToChildButton childId={childId} id={id} />
      </div>
      <div className='p-8'>
        <div className='mt-8 flow-root'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden rounded-lg shadow ring-1 ring-black/5'>
                <FeedTable
                  id={id}
                  childId={childId}
                  count={count}
                  feedInfo={JSON.stringify(feedInfo)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
