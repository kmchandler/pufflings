'use client'

import { feed } from "@prisma/client";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { useRouter } from "next/navigation";
const FeedTable = ({id, childId, feedInfo}: {id: string, childId: string, feedInfo: string}) => {
    const router = useRouter()

    const navigateToChildFeeds = (feed: feed) => {
        return () => {
            router.push(`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`)
        }
    }

    const feedInfoHydrated: feed[] = JSON.parse(feedInfo)

    return (
        <table className="min-w-full divide-y divide-gray-300 ">
            <thead className="bg-slate-50">
                <tr className="">
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                        start time
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        end time
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        amount
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {feedInfoHydrated?.map((feed) => {
                const startTimeData = feed.start_time as Date;
                const startTimeDate = new Date(startTimeData)
                const dateTimeData = feed.end_time as Date;
                const dateTimeEnd = new Date(dateTimeData)

                return (
                    <tr key={`feed_${feed.id}`} className="cursor-pointer" onClick={navigateToChildFeeds(feed)}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {dateFormatter.format(startTimeDate)} {timeFormatter.format(startTimeDate)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {feed?.amount?.toString()} oz
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default FeedTable