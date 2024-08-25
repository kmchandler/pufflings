import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Sleeps ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const sleepInfo = childInfo?.sleeps

  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });

  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'});

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          sleeps
        </div>
        <div className="text-3xl self-center">
          {sleepInfo?.map(sleep => {
            const dateTimeStart = sleep.start_time
            const dateTimeEnd = sleep.end_time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/sleeps/${sleep.id}`}>
                <div className="flex space-x-3">
                  <div>
                    start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
                  </div>
                  <div>
                    end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
