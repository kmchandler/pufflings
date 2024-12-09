import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { lastCreatedSleep } from "@/lib/sleep";
import BackButton from "@/app/ui/backButton";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId));

  const sleepInfo = childInfo?.sleeps;

  await lastCreatedSleep(childId);
  
  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        sleeps
      </div>
      <div className="flex flex-row">
        <BackButton />
        <div className="text-oxford-blue py-2 px-4 rounded shadow transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded ml-4">
          <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/startSleep`}>
            add sleep
          </Link>
        </div>
      </div>
      <div className="text-3xl mt-2 flex flex-wrap justify-center space-x-5">
        {sleepInfo?.slice().reverse().map(sleep => {
          const dateTimeStart = sleep.start_time;
          const dateTimeEnd = sleep.end_time as Date;
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`} className="text-oxford-blue py-2 px-4 rounded shadow bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mb-6 w-68">
              <div className="flex flex-col items-start text-left text-2xl">
                <div className="mt-3">
                  start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
                </div>
                <div className="mt-3">
                  end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
