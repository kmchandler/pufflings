import { getChild } from "@/lib/child";
import Link from "next/link";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Medicals ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const medicalInfo = childInfo?.medicals

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          medicals
        </div>
        <div className="text-3xl self-center flex flex-row space-x-3">
          {medicalInfo?.map(medical => {
              const dateTime = medical?.time
            return (
              // eslint-disable-next-line react/jsx-key
              <Link href={`/pufflings/family/${id}/child/${childId}/medical/${medical.id}`}>
                <div className="flex flex-col space-x-3">
                  <div>
                    type: {medical.type}
                  </div>
                  <div>
                    time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
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
