import { getSleep, deleteSleep } from "@/lib/sleep";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Sleeps ({ params: { sleepId, childId }}: {params: { sleepId: string, childId: string}}) {

  const sleepInfo = await getSleep(parseInt(sleepId))

  const dateTimeStart = sleepInfo?.start_time

  const dateTimeEnd = sleepInfo?.end_time

  return (
    <div className="flex flex-col">
      <div className="mt-36 self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
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
      <form action={deleteSleep}>
        <input name="sleepId" value={sleepId} hidden />
        <input name="childId" value={childId} hidden />
        <button type="submit">delete</button>
      </form>
    </div>
  );
};
