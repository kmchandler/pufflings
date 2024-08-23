import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const feedInfo = childInfo?.feeds

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        Feeds
        {feedInfo?.map(feed => {
          return (
            <Link href={`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`}>
            <div>
              Start Time: {feed.start_time.toISOString()}
              End Time: {feed.end_time.toISOString()}
              Amount: {feed.amount.toFixed()}oz
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};
