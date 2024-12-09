import { getChild } from '@/lib/child';
import FeedTable from './feedTable';
import Link from 'next/link';
import { feed } from '@prisma/client';
import LastFeed from './lastFeed';
import { getPagedFeeds, getLastFeed } from '@/lib/feed';
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

  return (
    <div className='mt-5 flex flex-col'>
      <div className='self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        Feeds
      </div>
      {feedInfo && <LastFeed lastFeed={lastFeed[0]} />}
      <div className='flex flex-row self-center'>
        <BackToChildButton childId={childId} id={id} />
        <Link
          href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed`}
          className='transition-duration-100 mb-4 ml-4 mt-4 flex w-24 flex-row justify-center self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
        >
          add feed
        </Link>
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
