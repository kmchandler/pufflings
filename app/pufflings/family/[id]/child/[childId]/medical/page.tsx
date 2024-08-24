import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";

export default async function Medicals ({ params: { childId, id }}: {params: { childId: string, id: string }}) {

  const childInfo = await getChild(parseInt(childId))

  const medicalInfo = childInfo?.medicals

  return (
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          medicals
        </div>
        <div className="text-3xl self-center">
          {medicalInfo?.map(medical => {
            return (
              <Link href={`/pufflings/family/${id}/child/${childId}/medical/${medical.id}`}>
                <div>
                  Type: {medical.type}
                  Time: {medical.time.toISOString()}
                  Notes: {medical.notes}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
  );
};
