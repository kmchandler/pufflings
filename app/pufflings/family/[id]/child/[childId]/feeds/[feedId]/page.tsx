import { deleteFeed, getFeed } from "@/lib/feed";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import BackButton from "@/app/ui/backButton";
import SubmitButton from "@/app/ui/submitButton";

export default async function Feeds ({ params: { childId, feedId }}: {params: { childId: string, feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId));

  const dateTimeStart = feedInfo?.start_time;

  const dateTimeEnd = feedInfo?.end_time as Date;

  return (
    <div className="mt-36 flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        single feed info 
      </div>
      <div className="w-fit self-center">
        <BackButton />
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
        <SubmitButton message="remove feed" />
      </form>
    </div>
  );
};
