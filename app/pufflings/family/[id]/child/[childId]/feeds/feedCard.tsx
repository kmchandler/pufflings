'use client'

import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { feed } from "@prisma/client";


const FeedCard = ({id, childId, feed}: {id: string, childId: string, feed: feed}) => {
  const dateTimeStart = new Date(feed.start_time);
  const dateTimeData = feed.end_time as Date;
  const dateTimeEnd = new Date(dateTimeData)
  return (
    <Link href={`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`} className="self-center text-oxford-blue py-2 px-4 rounded shadow bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mb-6 w-72">
      <div className="text-left text-2xl">
        <div>
          start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
        </div>
        <div>
          end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
        </div>  
        <div>
          amount: {feed?.amount?.toString()} oz
        </div>
      </div>
    </Link>
  )
}

export default FeedCard
