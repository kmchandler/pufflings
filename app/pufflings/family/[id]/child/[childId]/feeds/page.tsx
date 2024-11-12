import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId));

  const feedInfo = childInfo?.feeds;

  return (
    <div className="mt-36 flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        Feeds
      </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex-row mt-4 mb-4 outline outline-1 outline-oxford-blue rounded justify-center self-center w-24">
        <Link href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed`}>
          add feed
        </Link>
      </div>
      <div className="text-3xl self-center flex flex-wrap justify-center items-center mt-4 space-x-7">
        {feedInfo?.slice().reverse().map(feed => {
          const dateTimeStart = new Date(feed.start_time);
          const dateTimeData = feed.end_time as Date;
          const dateTimeEnd = new Date(dateTimeData)

          return (
            // eslint-disable-next-line react/jsx-key
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
          );
        })}
      </div>
    </div>
  );
};
