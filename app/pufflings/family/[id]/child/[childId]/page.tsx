import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";

export default async function Child ({ params: { childId }}: {params: { childId: string}}) {
  console.log(childId);

  const childInfo = await getChild(parseInt(childId))
  console.log(childInfo?.diapers);
  const diaperInfo = childInfo?.diapers

  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="mt-36 self-center">
        CHILD PAGE text here
        {diaperInfo?.map(diaper => {
          return (<div>
            {diaper.time_of_last_change.toISOString()}
            {diaper.type}
          </div>)
        })}
      </div>
    </div>
  );
};
