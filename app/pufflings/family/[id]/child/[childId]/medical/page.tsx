import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Medicals ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const medicalInfo = childInfo?.medicals

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          medical
        </div>
        <div className="text-3xl self-center flex flex-row space-x-3">
          {medicalInfo?.map(medical => {
              const dateTime = medical?.time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/medical/${medical.id}`}>
                <div className="flex flex-col space-x-3 self-center">
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
            )
          })}
        </div>
      </div>
  );
};
