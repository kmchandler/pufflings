import NavBar from "@/app/ui/navigation";
import { getMedical } from "@/lib/medical";

export default async function Medical ({ params: { medicalId }}: {params: { medicalId: string}}) {

  const medicalInfo = await getMedical(parseInt(medicalId))

  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });

  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'});
  
  const dateTime = medicalInfo?.time

  return (
    <div className="mt-36 flex flex-col">
      <div className="self-center text-6xl">
        single medical page
      </div>
      <div className="self-center text-3xl flex space-x-3">
        <div>
          type: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
        </div>
        <div>
          notes: {medicalInfo?.notes}
        </div>
      </div>
     </div>
  );
};
