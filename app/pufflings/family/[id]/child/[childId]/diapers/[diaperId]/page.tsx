import { getDiaper } from "@/lib/diaper";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Diapers ({ params: { diaperId }}: {params: { diaperId: string}}) {

  const diaperInfo = await getDiaper(parseInt(diaperId))
  
  const dateTime = diaperInfo?.time_of_last_change

  return (
    <div>
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          single diaper info
        </div>
        <div className="text-3xl flex space-x-3">
          <div>
            time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
          </div>
          <div>
            type: {diaperInfo?.type}
          </div>
        </div>
      </div>
    </div>
  );
};
