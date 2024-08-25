import NavBar from "@/app/ui/navigation";
import { getDiaper } from "@/lib/diaper";

export default async function Diapers ({ params: { diaperId }}: {params: { diaperId: string}}) {

  const diaperInfo = await getDiaper(parseInt(diaperId))

  return (
    <div>
      <div className="mt-36 flex flex-col">
        <div className="text-6xl self-center">
          single diaper info
        </div>
        <div className="text-3xl self-center">
          time of last change: {diaperInfo?.time_of_last_change.toISOString()}
          type: {diaperInfo?.type}
        </div>
      </div>
    </div>
  );
};
