import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const sleepInfo = childInfo?.sleeps

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        Sleeps
        {sleepInfo?.map(sleep => {
          return (
            <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`}>
              <div>
                Start Time: {sleep.start_time.toISOString()}
                End Time: {sleep.end_time.toISOString()}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};
