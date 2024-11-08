import { getChild } from "@/lib/child";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyMedical, faMoon } from '@fortawesome/free-solid-svg-icons'
import { BabyBottleIcon } from "hugeicons-react";
import { DiaperIcon } from "hugeicons-react";
import DeleteButton from '../../../../../ui/deleteButton'

export default async function Child ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const diaperIcon = <DiaperIcon color="oxford-blue" size="99" />
  const feedIcon = <BabyBottleIcon color="oxford-blue" size="99" />
  const medicalIcon = <FontAwesomeIcon icon={faHouseChimneyMedical} />
  const sleepIcon = <FontAwesomeIcon icon={faMoon} />

  // const diaperInfo = childInfo?.diapers
  // const feedInfo = childInfo?.feeds
  // const medicalInfo = childInfo?.medicals
  // const sleepInfo = childInfo?.sleeps


const activities = [
  {
    url: `/pufflings/family/${id}/child/${childId}/diapers`,
    icon: diaperIcon,
    label: 'diapers'
  },
  {
    url:`/pufflings/family/${id}/child/${childId}/sleeps`,
    icon: sleepIcon,
    label: 'sleeps'
  },
  {
    url:`/pufflings/family/${id}/child/${childId}/feeds`,
    icon: feedIcon,
    label: 'feeds'
  },
  {
    url:`/pufflings/family/${id}/child/${childId}/medical`,
    icon: medicalIcon,
    label: 'medical'
  }
]


  return (
    <div className="flex flex-col">
      <div className="mt-36">
          <div className="text-6xl flex justify-center">
            <span className="text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] mb-5">{childInfo?.name.toLocaleLowerCase()}</span>
          </div>
          <Link href={`/pufflings/family/${id}/child/${childId}/profile`} className="text-oxford-blue py-2 px-4 rounded shadow outline outline-1 outline-oxford-blue rounded transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-1 w-fit flex place-self-center">view {childInfo?.name.toLocaleLowerCase()}'s profile</Link>
          <div className="flex flex-row flex-wrap justify-evenly md:space-x-10">
            {activities.map(activity => {
              return (
                <div key={`label_${activity.label}`}>
                  <Link href={activity.url} className="text-oxford-blue py-2 px-4 rounded shadow flex flex-col bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-7">
                    <div className="min-w-[180px] flex flex-col">
                      <div className="self-center text-8xl mt-6">
                        {activity.icon}
                      </div>
                      <div className="self-center text-4xl mb-3 mt-1 ">
                        {activity.label}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })} 
          </div>
        <DeleteButton childId={childId} familyId={id} />
        {/* {diaperInfo?.map(diaper => {
          return (
            <div>
              Time of Last Change: {diaper.time_of_last_change.toISOString()}
              Type: {diaper.type}
            </div>
          )
        })}

        {feedInfo?.map(feed => {
          return (
            <div>
              Start Time: {feed.start_time.toISOString()}
              End Time: {feed.end_time.toISOString()}
              Amount: {feed.amount.toFixed()}oz
            </div>
          )
        })}

        {medicalInfo?.map(medical => {
          return (
            <div>
              Type: {medical.type}
              Time: {medical.time.toISOString()}
              Notes: {medical.notes}
            </div>
          )
        })}

        {sleepInfo?.map(sleep => {
          return (
            <div>
              Start Time: {sleep.start_time.toISOString()}
              End Time: {sleep.end_time.toISOString()}
            </div>
          )
        })} */}
      </div>
    </div>
  );
};
