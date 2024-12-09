import { getFamily } from '@/lib/family';
import Link from 'next/link';
import Image from 'next/image';
import { getFamilyUserArray } from '@/lib/family';
import clerkClient from '@/lib/clerkClient';
import { currentUser } from '@clerk/nextjs/server';

export default async function Family({
  params: { id },
}: {
  params: { id: string };
}) {
  const familyInfo = await getFamily(parseInt(id));

  const children = familyInfo?.children;

  const familyUser = await getFamilyUserArray(parseInt(id));

  const myUser = await currentUser();
  const myUserId = myUser?.id;
  const myFirstName = myUser?.firstName;

  const outlineIcon = (
    <Image
      src='/pufflingsOutline.png'
      width='100'
      height='100'
      alt='puffling outline icon'
    />
  );

  const caregiverIcon = (
    <Image
      src='/adultPufflingsOutlineTea.png'
      width='100'
      height='100'
      alt='caregiver icon'
    />
  );

  return (
    <div className='flex flex-col'>
      <div className='self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        my family
      </div>
      <div className='mt-2 self-center text-3xl'>children</div>
      <Link
        href={`/pufflings/family/${id}/addChild`}
        className='transition-duration-100 w-26 mt-3 flex flex-col self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        add a child
      </Link>
      <div className='mt-7 flex flex-row space-x-5 self-center text-3xl sm:space-x-10'>
        {children?.map((child) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link
              href={`/pufflings/family/${id}/child/${child.id}`}
              className='transition-duration-100 flex flex-col rounded bg-tea-green text-xl text-oxford-blue shadow transition-all hover:drop-shadow-xl'
            >
              <div className='mb-2 ml-8 mr-8 mt-4 self-center text-8xl'>
                {outlineIcon}
              </div>
              <div className='text mb-2 self-center text-4xl'>
                {child.name.toLowerCase()}
              </div>
            </Link>
          );
        })}
      </div>
      <div className='mb--1 mt-7 self-center text-3xl'>caregivers</div>
      <Link
        href={`/pufflings/family/${id}/addMember`}
        className='transition-duration-100 w-26 mt-3 flex flex-col self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        add a caregiver
      </Link>
      <div className='mt-7 flex flex-row space-x-5 self-center text-3xl sm:space-x-10'>
        {familyUser.map(async (user) => {
          const userResult = await clerkClient.users.getUserList({
            userId: [user.user_id],
          });
          const data = userResult.data[0];
          const firstName = data.firstName;

          return (
            // eslint-disable-next-line react/jsx-key
            <Link
              href={`/pufflings/family/${id}/caregiver/${user.user_id}`}
              className='transition-duration-100 flex flex-col rounded bg-light-salmon text-xl text-oxford-blue shadow transition-all hover:drop-shadow-xl'
            >
              <div className='mb-2 ml-8 mr-8 mt-4 self-center text-8xl'>
                {outlineIcon}
              </div>
              <div className='text mb-2 self-center text-4xl'>
                {firstName?.toLowerCase()}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
