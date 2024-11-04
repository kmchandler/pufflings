import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { lastCreatedSleep } from "@/lib/sleep";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const sleepInfo = childInfo?.sleeps

  const findActiveSleep = async () => {
    await lastCreatedSleep(childId)
  }
   findActiveSleep();

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          sleeps
        </div>
        <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/startSleep`}>
          add sleep
        </Link>
        <div className="text-3xl self-center">
          {sleepInfo?.map(sleep => {
            const dateTimeStart = sleep.start_time
            const dateTimeEnd = sleep.end_time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`}>
                <div className="flex space-x-3">
                  <div>
                    start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
                  </div>
                  <div>
                    end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
