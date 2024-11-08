import { getChild } from "@/lib/child";
import { lastCreatedHeight } from "@/lib/height";
import { getFamily } from "@/lib/utils";
import Link from "next/link";


const childProfilePage = async ({ params: { childId, id }}: {params: { childId: string, id:string }}) => {

  const childInfo = await getChild(parseInt(childId))
  const familyInfo = await getFamily(parseInt(id));
  const currentHeight = await lastCreatedHeight(childId);
  console.log(currentHeight)

  // Info I'd like to have on this page- age(need to collect birthday to calculate), current height, current weight, (possibly blood type?)

  return (
    <div className="flex flex-col">
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p>{childInfo?.name} {familyInfo.family_name}</p>
        <p className="flex flex-row">height: {currentHeight?.feet} ft {currentHeight.inches} in
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`} className="text-oxford-blue py-2 px-4 rounded shadow flex outline outline-1 outline-oxford-blue rounded transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex mt-5 self-center w-fit ml-3 -mt-1">edit height</Link>
        </p>
    </div> 

     </div>
  )
}
export default childProfilePage;
