import NavBar from "@/app/ui/navigation";
import { getSleep } from "@/lib/sleep";

export default async function Sleeps ({ params: { sleepId }}: {params: { sleepId: string}}) {

  const sleepInfo = await getSleep(parseInt(sleepId))
  console.log(sleepInfo)

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        SLEEPS PAGE
        Start Time: {sleepInfo?.start_time.toISOString()}
        End Time: {sleepInfo?.end_time.toISOString()}
      </div>
    </div>
  );
};
