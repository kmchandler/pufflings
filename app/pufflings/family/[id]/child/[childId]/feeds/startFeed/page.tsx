import { logFeedStart } from "@/lib/feed"

const startFeed = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={logFeedStart}>
      <input name="childId" value={childId} hidden/>
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">start feed</button>
    </form>
  )
}

export default startFeed
