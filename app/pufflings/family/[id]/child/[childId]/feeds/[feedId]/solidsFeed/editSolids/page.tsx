import { getFeed } from '@/lib/feed';
import EditForm from './editForm';

export default async function EditSolidsForm({
  params: { feedId },
}: {
  params: { feedId: string };
}) {
  const feedInfo = await getFeed(parseInt(feedId));
  console.log('ryann', feedInfo);

  return <EditForm feedInfo={feedInfo} />;
}
