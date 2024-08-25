import NavBar from "@/app/ui/navigation";
import { getSleep } from "@/lib/sleep";

export default async function Sleeps ({ params: { sleepId }}: {params: { sleepId: string}}) {

  const sleepInfo = await getSleep(parseInt(sleepId))

  return (
    <div className="flex flex-col">
      <div className="mt-36 self-center text-6xl">
        single sleep info
      </div>
      <div className="self-center text-3xl">
        start time: {sleepInfo?.start_time.toISOString()}
        end time: {sleepInfo?.end_time.toISOString()}
      </div>
    </div>
  );
};
