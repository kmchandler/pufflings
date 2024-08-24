import NavBar from "@/app/ui/navigation";
import { getFeed } from "@/lib/feed";

export default async function Feeds ({ params: { feedId }}: {params: { feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId))

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          single feed info 
        </div>
        <div className="text-3xl self-center">
          Start Time: {feedInfo?.start_time.toISOString()}
          End Time: {feedInfo?.end_time.toISOString()}
          Amount: {feedInfo?.amount.toFixed()}oz
        </div>
      </div>
  );
};
