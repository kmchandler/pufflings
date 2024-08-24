import NavBar from "@/app/ui/navigation";
import { getMedical } from "@/lib/medical";

export default async function Medical ({ params: { medicalId }}: {params: { medicalId: string}}) {

  const medicalInfo = await getMedical(parseInt(medicalId))

  return (
    <div className="mt-36 flex flex-col">
      <div className="self-center text-6xl">
        single medical page
      </div>
      <div className="self-center text-3xl">
        Type: {medicalInfo?.type}
        Time: {medicalInfo?.time.toISOString()}
        Notes: {medicalInfo?.notes}
      </div>
     </div>
  );
};
