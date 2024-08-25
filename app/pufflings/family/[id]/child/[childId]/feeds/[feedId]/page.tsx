import NavBar from "@/app/ui/navigation";
import { getFeed } from "@/lib/feed";

export default async function Feeds ({ params: { feedId }}: {params: { feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId))

  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });

  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'});

  const dateTimeStart = feedInfo?.start_time

  const dateTimeEnd = feedInfo?.end_time

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
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
