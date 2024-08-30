import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const feedInfo = childInfo?.feeds

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          Feeds
        </div>
        <div className="text-3xl self-center">
          {feedInfo?.map(feed => {
            const dateTimeStart = feed.start_time
            const dateTimeEnd = feed.end_time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`}>
              <div className="flex space-x-3">
                <div>
                  start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
                </div>
                <div>
                  end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
                </div>  
                <div>
                  amount: {feed.amount.toFixed()}oz
                </div>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
