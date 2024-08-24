import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Child ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  // const diaperInfo = childInfo?.diapers
  // const feedInfo = childInfo?.feeds
  // const medicalInfo = childInfo?.medicals
  // const sleepInfo = childInfo?.sleeps

  return (
    <div className="flex flex-col">
      <div className="mt-36 self-center">
          <div className="text-6xl">
            {childInfo?.name}
          </div>
          <div className="text-3xl">
            <div>
              <Link href={`/pufflings/family/${id}/child/${childId}/diapers`}>
                Diapers
              </Link>
            </div>
            <div>
              <Link href={`/pufflings/family/${id}/child/${childId}/feeds`}>
                Feeds
              </Link>
            </div>
            <div>
              <Link href={`/pufflings/family/${id}/child/${childId}/sleeps`}>
                Sleeps
              </Link>
            </div>
            <div>
              <Link href={`/pufflings/family/${id}/child/${childId}/medical`}>
                Medical
              </Link>
            </div>
          </div>
        {/* {diaperInfo?.map(diaper => {
          return (
            <div>
              Time of Last Change: {diaper.time_of_last_change.toISOString()}
              Type: {diaper.type}
            </div>
          )
        })}

        {feedInfo?.map(feed => {
          return (
            <div>
              Start Time: {feed.start_time.toISOString()}
              End Time: {feed.end_time.toISOString()}
              Amount: {feed.amount.toFixed()}oz
            </div>
          )
        })}

        {medicalInfo?.map(medical => {
          return (
            <div>
              Type: {medical.type}
              Time: {medical.time.toISOString()}
              Notes: {medical.notes}
            </div>
          )
        })}

        {sleepInfo?.map(sleep => {
          return (
            <div>
              Start Time: {sleep.start_time.toISOString()}
              End Time: {sleep.end_time.toISOString()}
            </div>
          )
        })} */}
      </div>
    </div>
  );
};
