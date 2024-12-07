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
  const myFirstName = myUser?.firstName

  const outlineIcon = <Image src="/pufflingsOutline.png" width="100" height="100" alt="puffling outline icon" />

  const caregiverIcon = <Image src="/adultPufflingsOutlineTea.png" width="100" height="100" alt="caregiver icon" />

  return (
    <div className="flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        my family
      </div>
      <div className="text-3xl self-center mt-2">
        children
      </div>
      <Link href={`/pufflings/family/${id}/addChild`} className="text-oxford-blue py-2 px-4 shadow outline outline-1 outline-oxford-blue rounded hover:drop-shadow-xl hover:bg-foreground-50 transition-all transition-duration-100 text-xl flex flex-col mt-3 w-26 self-center">add a child</Link>
      <div className="text-3xl self-center flex flex-row space-x-5 sm:space-x-10 mt-7">
        {children?.map(child => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/pufflings/family/${id}/child/${child.id}`} className="text-oxford-blue rounded shadow flex flex-col bg-tea-green hover:drop-shadow-xl transition-all transition-duration-100 text-xl">
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
      <div className="text-3xl self-center mt-7 mb--1">
        caregivers
      </div>
      <Link href={`/pufflings/family/${id}/addMember`} className="text-oxford-blue py-2 px-4 shadow outline outline-1 outline-oxford-blue rounded hover:drop-shadow-xl hover:bg-foreground-50 transition-all transition-duration-100 text-xl flex flex-col mt-3 w-26 self-center">add a caregiver</Link>
        <div className="text-3xl self-center flex flex-row space-x-5 sm:space-x-10 mt-7">
          {familyUser.map(async user => {
            const userResult = await clerkClient.users.getUserList({userId: [user.user_id]})
            const data = userResult.data[0]
            const firstName = data.firstName

            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/caregiver/${user.user_id}`} className="text-oxford-blue rounded shadow flex flex-col bg-light-salmon hover:drop-shadow-xl transition-all transition-duration-100 text-xl">
                <div className="self-center text-8xl mt-4 ml-8 mr-8 mb-2">
                  {outlineIcon}
                </div>
                <div className="self-center text-4xl mb-2 text">
                {firstName?.toLowerCase()}
                </div>
              </Link>
            )
          })}
      </div>
    </div>
  );
};
