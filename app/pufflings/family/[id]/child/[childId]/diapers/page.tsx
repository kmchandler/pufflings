import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Diapers ({ params: { childId, id }}: {params: { childId: string, id: string}}) {

  const childInfo = await getChild(parseInt(childId))

  const diaperInfo = childInfo?.diapers

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        Diapers
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
