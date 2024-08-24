import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Diapers ({ params: { childId, id }}: {params: { childId: string, id: string}}) {

  const childInfo = await getChild(parseInt(childId))

  const diaperInfo = childInfo?.diapers

  return (
      <div className="mt-36 flex flex-col">
        <div className="self-center text-6xl">
          diapers
        </div>
        <div className="text-3xl self-center">
          {diaperInfo?.map(diaper => {
            return (
              <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                <div>
                  Time of Last Change: {diaper.time_of_last_change.toISOString()}
                  Type: {diaper.type}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
