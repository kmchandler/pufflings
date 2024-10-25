import { getFamily } from "@/lib/family";
import Link from "next/link";
import Image from 'next/image';
import { getFamilyUserArray } from "@/lib/family";
import clerkClient from "@/lib/clerkClient";
import { currentUser } from "@clerk/nextjs/server";


export default async function Family ({ params: { id }}: {params: { id: string}}) {
  
  const familyInfo = await getFamily(parseInt(id));

  const children = familyInfo?.children

  const familyUser = await getFamilyUserArray(parseInt(id))

  const myUser = await currentUser();
  const myUserId = myUser?.id

  const outlineIcon = <Image src="/pufflingsOutline.png" width="100" height="100" alt="puffling outline icon" />

  // const caregiverIcon = <Image src="/adultPufflingsOutline.png" width="100" height="100" alt="caregiver icon" />

  return (
    <div className="flex flex-col mt-36">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        my family
      </div>
      children
      <div className="text-3xl self-center flex flex-row space-x-10">
        {children?.map(child => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/pufflings/family/${id}/child/${child.id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
              <div className="self-center text-8xl mt-4 ml-8 mr-8 mb-2">
                {outlineIcon}
              </div>
              <div className="self-center text-4xl mb-2 text">
                  {child.name.toLowerCase()}
              </div>
            </Link>
          )
        })}
      </div>
      caregivers
      <div className="text-3xl self-center flex flex-row space-x-10">
        {familyUser.map(async user => {
          const userResult = await clerkClient.users.getUserList({userId: [user.user_id]})
          const data = userResult.data[0]
          const firstName = data.firstName
          const lastName = data.lastName

          if (user.user_id == myUserId) {
            return (
              <div></div>
            )
          } else {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/pufflings/family/${id}/caregiver/${user.user_id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
              <div className="self-center text-8xl mt-4 ml-8 mr-8 mb-2">
                {outlineIcon}
              </div>
              <div className="self-center text-4xl mb-2 text">
               {firstName?.toLowerCase()} {lastName?.toLowerCase()}
              </div>
            </Link>
          )}
        })}
      </div>
      <Link href={`/pufflings/family/${id}/addChild`}>add a child</Link>
      <Link href={`/pufflings/family/${id}/addMember`}>add a caregiver</Link>
    </div>
  );
};
