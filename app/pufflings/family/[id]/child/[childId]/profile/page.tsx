import { getChild } from "@/lib/child";
import { getFamily } from "@/lib/utils";


const childProfilePage = async ({ params: { childId, id }}: {params: { childId: string, id:string }}) => {

  const childInfo = await getChild(parseInt(childId))
  const familyInfo = await getFamily(parseInt(id));

  // Info I'd like to have on this page- age(need to collect birthday to calculate), current height, current weight, (possibly blood type?)

  return (
    <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
      <p>{childInfo?.name} {familyInfo.family_name}</p>
    </div> 
  )
}
export default childProfilePage;
