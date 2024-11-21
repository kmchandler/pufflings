import { getChild } from "@/lib/child";
import FeedTable from "./feedTable";
import Link from "next/link";
import { feed } from "@prisma/client";
import LastFeed from "./lastFeed";
import BackButton from "@/app/ui/backButton";

export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId));

  const feedInfo: feed[] | undefined = childInfo?.feeds;

  return (
    <div className="flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        Feeds
      </div>
      {feedInfo && <LastFeed feedInfo={feedInfo} />}
      <div className="flex flex row self-center">
        <BackButton />
        <Link href={`/pufflings/family/${id}/child/${childId}/feeds/startFeed`} className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex-row mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded justify-center self-center w-24 ml-4">
            add feed
        </Link>
      </div>
      <div className="p-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black/5 rounded-lg">
                <FeedTable id={id} childId={childId} feedInfo={JSON.stringify(feedInfo)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
