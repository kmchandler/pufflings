import { logFeedEnd } from "@/lib/feed"

const endFeed = ({ params: { childId, feedId }}: {params: { childId: string, feedId: string }}) => {

  return (
    <form action={logFeedEnd}>
      <input name="childId" value={childId} hidden/>
      <input name="feedId" value={feedId} hidden/>
      <button type="submit">end feed</button>
    </form>
  )
}

export default endFeed
