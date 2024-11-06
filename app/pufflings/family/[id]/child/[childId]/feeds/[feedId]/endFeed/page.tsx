import { logFeedEnd } from "@/lib/feed"

const endFeed = ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  return (
    <form action={logFeedEnd}>
      <input name="childId" value={childId} hidden/>
      <input name="feedId" value={feedId} hidden/>
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">end feed</button>
    </form>
  )
}

export default endFeed
