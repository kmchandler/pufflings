import NavBar from "@/app/ui/navigation";
import { getFeed } from "@/lib/feed";

export default async function Feeds ({ params: { feedId }}: {params: { feedId: string}}) {

  const feedInfo = await getFeed(parseInt(feedId))

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        SINGLE FEED PAGE 
        <div>
          Start Time: {feedInfo?.start_time.toISOString()}
          End Time: {feedInfo?.end_time.toISOString()}
          Amount: {feedInfo?.amount.toFixed()}oz
        </div>
      </div>
    </div>
  );
};
