import { getFeed } from '@/lib/feed';
import EditBottleForm from './editForm';

export default async function editBottle({
  params: { feedId },
}: {
  params: { feedId: string };
}) {
  const feedInfo = await getFeed(parseInt(feedId));

  return <EditBottleForm feedInfo={feedInfo} />;
}
