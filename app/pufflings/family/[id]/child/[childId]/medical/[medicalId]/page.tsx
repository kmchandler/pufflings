import NavBar from "@/app/ui/navigation";
import { getMedical } from "@/lib/medical";

export default async function Medical ({ params: { medicalId }}: {params: { medicalId: string}}) {

  const medicalInfo = await getMedical(parseInt(medicalId))

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        MEDICAL PAGE
        Type: {medicalInfo?.type}
        Time: {medicalInfo?.time.toISOString()}
        Notes: {medicalInfo?.notes}
      </div>
    </div>
  );
};
