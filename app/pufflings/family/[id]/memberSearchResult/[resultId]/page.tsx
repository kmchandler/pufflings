import AddMemberButton from '@/app/ui/navigation/addMemberButton';
import clerkClient from '@/lib/clerkClient';

const MemberSearchResult = async ({
  params: { id, resultId },
}: {
  params: { id: string; resultId: string };
}) => {
  const result = await clerkClient.users.getUserList({ userId: [resultId] });
  const userInfo = result.data[0];
  const email = userInfo.emailAddresses[0].emailAddress;

  return (
    <div>
      <div className='transition-duration-100 mt-4 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
        <div className='flex min-w-[180px] flex-col'>
          <div className='mt-6 self-center text-6xl'>
            {userInfo.firstName} {userInfo.lastName}
          </div>
          <div className='mb-6 mt-1 self-center text-4xl'>{email}</div>
        </div>
      </div>
      <div className='flex justify-center'>
        <AddMemberButton id={id} resultId={resultId} />
      </div>
    </div>
  );
};

export default MemberSearchResult;
