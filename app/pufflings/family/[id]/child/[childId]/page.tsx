import { redirect } from 'next/navigation';
const ChildPage = async ({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) => {
  redirect(`/pufflings/family/${id}/child/${childId}/dashboard`);
};

export default ChildPage;
