import { getFeed } from '@/lib/feed';
import EditNursingForm from './editForm';

export default async function editNursing({
  params: { feedId },
}: {
  params: { feedId: string };
}) {
  const feedInfo = await getFeed(parseInt(feedId));

  return <EditNursingForm feedInfo={feedInfo} />;
}
