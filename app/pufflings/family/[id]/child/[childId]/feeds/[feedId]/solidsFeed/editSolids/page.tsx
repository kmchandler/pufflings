import { getFeed } from '@/lib/feed';
import EditSolidForm from './editForm';

export default async function EditSolids({
  params: { feedId },
}: {
  params: { feedId: string };
}) {
  const feedInfo = await getFeed(parseInt(feedId));

  return <EditSolidForm feedInfo={feedInfo} />;
}
