import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const feedInfo = childInfo?.feeds

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          Feeds
        </div>
        <div className="text-3xl self-center">
          {feedInfo?.map(feed => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/feeds/${feed.id}`}>
              <div>
                start time: {feed.start_time.toISOString()}
                end time: {feed.end_time.toISOString()}
                amount: {feed.amount.toFixed()}oz
              </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
