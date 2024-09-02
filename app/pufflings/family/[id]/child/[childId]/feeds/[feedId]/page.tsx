import { getFeed } from "@/lib/feed";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Feeds ({ params: { feedId }}: {params: { feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId))

  const dateTimeStart = feedInfo?.start_time

  const dateTimeEnd = feedInfo?.end_time

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          single feed info 
        </div>
        <div className="text-3xl self-center flex space-x-3">
          <div>
            start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
          </div>
          <div>
            end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.
          format(dateTimeEnd).toLowerCase()}
          </div>
          <div>
            amount: {feedInfo?.amount.toFixed()}oz
          </div>
        </div>
      </div>
  );
};
