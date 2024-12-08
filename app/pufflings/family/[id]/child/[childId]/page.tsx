import Recents from "@/app/ui/recents";
import { getChild } from "@/lib/child";
import { getChildDashboard, LastDiaper, LastFeed, LastSleep } from "@/lib/dashboard";


const ChildPage = async ({ params: { childId, id }}: {params: { childId: string, id: string }}) => {

  const childInfo = await getChild(parseInt(childId))
  const {
    lastFeed,
    lastSleep,
    lastDiaper
} = await getChildDashboard(parseInt(childId))

  return (
    <div>
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-2xl font-semibold text-gray-900">{childInfo?.name?.toLowerCase()}</h1>
      </div>
      <Recents lastFeed={lastFeed as LastFeed} lastSleep={lastSleep as LastSleep} lastDiaper={lastDiaper as LastDiaper} />
    </div>
  )
}

export default ChildPage