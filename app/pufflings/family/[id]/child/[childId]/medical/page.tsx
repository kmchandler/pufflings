import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import BackButton from "@/app/ui/backButton";

export default async function Medicals ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const medicalInfo = childInfo?.medicals

  return (
    <div>
      <div className="mt-5 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          medical
        </div>
        <div className="flex flex-row self-center">
          <BackButton />
          <div className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded ml-4">
          <Link href={`/pufflings/family/${id}/child/${childId}/medical/addMedical`}>
            add medical
          </Link>
          </div>
        </div>
        <div className="text-3xl self-center flex flex-row space-x-3">
          {medicalInfo?.slice().reverse().map(medical => {
            const dateTime = medical?.time;
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/medical/${medical.id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col">
                <div className="flex flex-col space-x-3 self-center text-3xl flex-wrap w-48">
                  <div className="ml-3">
                    {dateFormatter.format(dateTime)}
                  </div>
                  <div>
                    time: {timeFormatter.format(dateTime).toLowerCase()}
                  </div>
                  <div className="ml-3">
                    type: {medical.type}
                  </div>
                  <div>
                    notes: {medical.notes}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
