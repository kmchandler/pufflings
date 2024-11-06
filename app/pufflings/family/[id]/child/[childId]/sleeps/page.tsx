import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { lastCreatedSleep } from "@/lib/sleep";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const sleepInfo = childInfo?.sleeps

  await lastCreatedSleep(childId)
  
  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          sleeps
        </div>
        <div className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-row mt-4 mb-4 outline outline-1 outline-oxford-blue rounded self-center">
          <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/startSleep`}>
          add sleep
        </Link>
        </div>
        <div className="text-3xl self-center mt-2">
          {sleepInfo?.map(sleep => {
            const dateTimeStart = sleep.start_time
            const dateTimeEnd = sleep.end_time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`} className="self-center text-oxford-blue py-2 px-4 rounded shadow bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-row space-x-7 space-y-7 mb-6">
                <div className="flex flex-col space-x-3 self-center jusify-center text-2xl flex-wrap w-68">
                  <div>
                    <div className="mr-3 mt-3">
                      start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
                    </div>
                    <div className="mt-3">
                      end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
