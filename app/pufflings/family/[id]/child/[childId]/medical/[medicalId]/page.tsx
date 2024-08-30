import { getMedical } from "@/lib/medical";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Medical ({ params: { medicalId }}: {params: { medicalId: string}}) {

  const medicalInfo = await getMedical(parseInt(medicalId))
  
  const dateTime = medicalInfo?.time

  return (
    <div className="mt-36 flex flex-col">
      <div className="self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        single medical page
      </div>
      <div className="self-center text-3xl flex flex-col space-x-3">
        <div className="ml-3">
          {dateFormatter.format(dateTime)}
        </div>
        <div>
          time: {timeFormatter.format(dateTime).toLowerCase()}
        </div>
        <div className="ml-3">
          type: {medicalInfo?.type}
        </div>
        <div>
          notes: {medicalInfo?.notes}
        </div>
      </div>
     </div>
  );
};
