import { getChild } from "@/lib/child";
import FeedTable from "./feedTable";
import { feed } from "@prisma/client";
import { redirect } from 'next/navigation';


export default async function Feeds ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId));

  const feedInfo = childInfo?.feeds;

  return (
    <div className="flex flex-col">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        Feeds
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
