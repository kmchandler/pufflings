'use server';

import DeleteButton from '@/app/ui/deleteButton';
import Recents from '@/app/ui/recents';
import { getChild } from '@/lib/child';
import {
  getChildDashboard,
  LastDiaper,
  LastFeed,
  LastSleep,
} from '@/lib/dashboard';
import Link from 'next/link';

const Dashboard = async ({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) => {
  const { lastFeed, lastSleep, lastDiaper } = await getChildDashboard(
    parseInt(childId)
  );

  const childInfo = await getChild(parseInt(childId));

  return (
    <>
      <Recents
        familyId={id}
        childId={childId}
        lastFeed={lastFeed as LastFeed}
        lastSleep={lastSleep as LastSleep}
        lastDiaper={lastDiaper as LastDiaper}
      />
      <div className='mt-10 flex flex-row place-self-center'>
        <Link
          href={`/pufflings/family/${id}/child/${childId}/profile`}
          className='transition-duration-100 mr-4 h-fit w-fit rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
        >
          view {childInfo?.name.toLocaleLowerCase()}&apos;s profile
        </Link>
        <DeleteButton childId={childId} familyId={id} />
      </div>
    </>
  );
};

export default Dashboard;
