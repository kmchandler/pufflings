'use client'; 

import { LastDiaper, LastFeed, LastSleep } from "@/lib/dashboard";
import Link from "next/link"

const Recents =  ({ lastFeed, lastSleep, lastDiaper }: { lastFeed: LastFeed, lastSleep: LastSleep, lastDiaper: LastDiaper}) => {
    console.log(lastFeed)
    return (
        <>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="flex px-4 py-5 sm:p-6">
                        <div className="flex flex-col text-left left-0">
                            <dt className="truncate text-sm font-medium text-gray-500">last feed</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{lastFeed?.timeSince} hrs ago</dd>
                        </div>
                        <div className="flex grow">&nbsp;</div>
                        <div className="flex flex-col text-right right-0">
                            <dt className="truncate text-sm font-medium text-gray-500">amount</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{2} oz</dd>
                        </div>
                    </div>
                    <div className="bg-tea-green">
                        <Link href={""} 
                        className="text-oxford-blue py-1 px-2 text-center rounded hover:drop-shadow-xl hover:bg-foreground-50 transition-all transition-duration-100 text-xl flex flex-col mt-3 w-26 self-center">
                            start new feed
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="flex px-4 py-5 sm:p-6">
                        <div className="flex flex-col text-left left-0">
                            <dt className="truncate text-sm font-medium text-gray-500">last diaper</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{lastDiaper?.timeSince} hrs ago</dd>
                        </div>
                        <div className="flex grow">&nbsp;</div>
                        <div className="flex flex-col text-right right-0">
                            <dt className="truncate text-sm font-medium text-gray-500">type</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{lastDiaper?.type}</dd>
                        </div>
                    </div>
                   
                    <div className="bg-tea-green">
                        <Link href={""} 
                        className="text-oxford-blue py-1 px-2 text-center rounded hover:drop-shadow-xl hover:bg-foreground-50 transition-all transition-duration-100 text-xl flex flex-col mt-3 w-26 self-center">
                            add diaper
                        </Link>
                    </div>
                </div>

                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="flex px-4 py-5 sm:p-6">
                        <div className="flex flex-col text-left left-0">
                            <dt className="truncate text-sm font-medium text-gray-500">last sleep start</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{lastSleep?.start_time.toLocaleTimeString()}</dd>
                        </div>
                        <div className="flex grow">&nbsp;</div>
                        <div className="flex flex-col text-right right-0">
                            <dt className="truncate text-sm font-medium text-gray-500">last sleep end</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{lastSleep?.end_time?.toLocaleTimeString()}</dd>
                        </div>
                    </div>
                   
                    <div className="bg-tea-green">
                        <Link href={""} 
                        className="text-oxford-blue py-1 px-2 text-center rounded hover:drop-shadow-xl hover:bg-foreground-50 transition-all transition-duration-100 text-xl flex flex-col mt-3 w-26 self-center">
                            start new sleep
                        </Link>
                    </div>
                </div>
            </dl>
        </>
    )
}

export default Recents