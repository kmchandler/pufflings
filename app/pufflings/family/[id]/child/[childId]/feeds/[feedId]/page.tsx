import { deleteFeed, getFeed } from "@/lib/feed";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Feeds ({ params: { childId, feedId }}: {params: { childId: string, feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId));

  const dateTimeStart = feedInfo?.start_time;

  const dateTimeEnd = feedInfo?.end_time as Date;

  return (
    <div className="mt-36 flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        single feed info 
      </div>
      <div className="text-3xl self-center flex flex-col text-oxford-blue py-2 px-4 rounded shadow bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 w-68 mt-6 mb-4">
        <div className="flex flex-col items-start text-left space-y-2">
          <div>
            start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
          </div>
          <div>
            end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
          </div>
          <div>
            amount: {feedInfo?.amount?.toFixed()} oz
          </div>
        </div>
      </div>
      <form action={deleteFeed} className="self-center">
        <input name="childId" value={childId} hidden />
        <input name="feedId" value={feedId} hidden />
        <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-row mt-4 mb-4 outline outline-1 outline-oxford-blue rounded justify-center">
          remove feed
        </button>
      </form>
    </div>
  );
};
