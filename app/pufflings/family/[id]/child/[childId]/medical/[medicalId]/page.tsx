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
        type: {medicalInfo?.type}
        time: {medicalInfo?.time.toISOString()}
        notes: {medicalInfo?.notes}
      </div>
     </div>
  );
};
