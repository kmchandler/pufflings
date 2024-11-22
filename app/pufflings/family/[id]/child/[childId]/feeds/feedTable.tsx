'use client'

import { feed } from "@prisma/client";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const FeedTable = (
    {id, childId, feedInfo, count}: {id: string, childId: string, feedInfo: string, count: number}) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const pageParam: string | null = searchParams.get('page')
    const currentPage: number = pageParam ? parseInt(pageParam) : 1

    const startCount = ((currentPage - 1)  * 10) + 1
    let endCount = ((currentPage - 1) * 10) + 10
    if (endCount > count) {
        endCount = count
    }

    const prevPageParams = new URLSearchParams(searchParams)
    prevPageParams.set('page', (currentPage - 1).toString())

    const nextPageParams = new URLSearchParams(searchParams)
    const nextPageNum = currentPage > 1 ? currentPage + 1 : 2
    nextPageParams.set('page', nextPageNum.toString())

    const hasNextPages = (currentPage * 10) < count

    const navigateToChildFeeds = (feed: feed) => {
        return () => {
            router.push(`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`)
        }
    }

    const feedInfoHydrated: feed[] = JSON.parse(feedInfo)

    return (
        <div>
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
            <nav
                aria-label="Pagination"
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                >
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{startCount}</span> to <span className="font-medium">{endCount}</span> of{' '}
                    <span className="font-medium">{count}</span> results
                    </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                    <a
                        href={`${pathname}?${prevPageParams.toString()}`}
                        className={`relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 ${currentPage == 1 ? 'hidden' : ''}`}>
                        Previous
                    </a>
                    <a
                        href={`${pathname}?${nextPageParams.toString()}`}
                        className={`relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0 ${!hasNextPages ? 'hidden' : ''}`}>
                        Next
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default FeedTable