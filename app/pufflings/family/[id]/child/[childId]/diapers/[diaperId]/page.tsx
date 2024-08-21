import NavBar from "@/app/ui/navigation";
import { getDiaper } from "@/lib/diaper";

export default async function Diapers ({ params: { diaperId }}: {params: { diaperId: string}}) {

  const diaperInfo = await getDiaper(parseInt(diaperId))

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        DIAPER PAGE
        Time of Last Change: {diaperInfo?.time_of_last_change.toISOString()}
        Type: {diaperInfo?.type}
      </div>
    </div>
  );
};
