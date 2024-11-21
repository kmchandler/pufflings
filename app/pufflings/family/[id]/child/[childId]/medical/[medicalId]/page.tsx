import { deleteMedical, getMedical } from "@/lib/medical";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import BackButton from "@/app/ui/backButton";
import SubmitButton from "@/app/ui/submitButton";

export default async function Medical ({ params: { childId, medicalId }}: {params: { childId: string, medicalId: string}}) {

  const medicalInfo = await getMedical(parseInt(medicalId))
  
  const dateTime = medicalInfo?.time

  return (
    <div className="mt-36 flex flex-col">
      <div className="self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        single medical page
      </div>
      <div className="w-fit self-center">
        <BackButton />
      </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 w-56 self-center">
        <div className="ml-1">
          {dateFormatter.format(dateTime)}
        </div>
        <div>
          time: {timeFormatter.format(dateTime).toLowerCase()}
        </div>
        <div>
          type: {medicalInfo?.type}
        </div>
        <div>
          notes: {medicalInfo?.notes}
        </div>
      </div>
      <form action={deleteMedical} className="self-center">
        <input name="childId" value={childId} hidden/>
        <input name="medicalId" value={medicalId} hidden/>
        <SubmitButton message="delete medical" />
      </form>
     </div>
  );
};
