import { logFeedEnd } from "@/lib/feed"
import { getChild } from "@/lib/child"

const endFeed = async ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  const childInfo = async (childId: number) => {
    return await getChild(childId)
  }

  const child = await childInfo(Number(childId))

  return (
    <div className="justify-items-center">
      <h2 className="text-4xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        {child?.name.toLowerCase()} is eating...
      </h2>
      <form action={logFeedEnd}>
        <input name="childId" value={childId} hidden/>
        <input name="feedId" value={feedId} hidden/>
        <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">end feed</button>
      </form>
    </div>
  )
}

export default endFeed
