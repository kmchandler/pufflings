import { getChild } from "@/lib/child";
import Link from "next/link";
import FeedCard from "./feedCard";

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
          return (
            <FeedCard key={`feed_${id}`} id={id} childId={childId} feed={feed} />
          );
        })}
      </div>
    </div>
  );
};
