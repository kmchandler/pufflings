import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const sleepInfo = childInfo?.sleeps

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          sleeps
        </div>
        <div className="text-3xl self-center">
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
