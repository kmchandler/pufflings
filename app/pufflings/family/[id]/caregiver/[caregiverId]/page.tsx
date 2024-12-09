import { getUserById } from '@/lib/family';

const caregiverPage = async ({
  params: { caregiverId },
}: {
  params: { caregiverId: string };
}) => {
  const user = await getUserById(caregiverId);

  return (
    <div className='transition-duration-100 mt-4 inline-block flex flex-col rounded bg-tea-green px-4 py-2 text-center text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default caregiverPage;
