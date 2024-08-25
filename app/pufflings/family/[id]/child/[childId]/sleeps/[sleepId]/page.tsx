import NavBar from "@/app/ui/navigation";
import { getSleep } from "@/lib/sleep";

export default async function Sleeps ({ params: { sleepId }}: {params: { sleepId: string}}) {

  const sleepInfo = await getSleep(parseInt(sleepId))

  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });

  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'});

  const dateTimeStart = sleepInfo?.start_time

  const dateTimeEnd = sleepInfo?.end_time

  return (
    <div className="flex flex-col">
      <div className="mt-36 self-center text-6xl">
        single sleep info
      </div>
      <div className="self-center text-3xl flex space-x-3">
        <div>
          start time: {dateFormatter.format(dateTimeStart)} {timeFormatter.format(dateTimeStart).toLowerCase()}
        </div>
        <div>
          end time: {dateFormatter.format(dateTimeEnd)} {timeFormatter.format(dateTimeEnd).toLowerCase()}
        </div>
      </div>
    </div>
  );
};
