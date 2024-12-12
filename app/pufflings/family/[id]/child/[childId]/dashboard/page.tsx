'use server';

import FeedChart from '@/app/ui/charts/feedChart';
import Recents from '@/app/ui/recents';
import {
  getChildDashboard,
  LastDiaper,
  LastFeed,
  LastSleep,
} from '@/lib/dashboard';

const Dashboard = async ({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) => {
  const { lastFeed, lastSleep, lastDiaper } = await getChildDashboard(
    parseInt(childId)
  );

  return (
    <div className='flex flex-col gap-10'>
      <Recents
        familyId={id}
        childId={childId}
        lastFeed={lastFeed as LastFeed}
        lastSleep={lastSleep as LastSleep}
        lastDiaper={lastDiaper as LastDiaper}
      />
      <FeedChart childId={childId} />
    </div>
  );
};

export default Dashboard;
