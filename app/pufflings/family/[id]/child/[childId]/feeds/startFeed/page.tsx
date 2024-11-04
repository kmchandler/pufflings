import { logFeedStart } from "@/lib/feed"

const startFeed = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={logFeedStart}>
      <input name="childId" value={childId} hidden/>
      <button type="submit">start feed</button>
    </form>
  )
}

export default startFeed
