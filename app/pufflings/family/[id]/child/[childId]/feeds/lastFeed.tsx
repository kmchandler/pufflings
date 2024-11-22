import { feed } from "@prisma/client"

const LastFeed = ({lastFeed}: {lastFeed: feed}) => {
  const current = new Date()
  const lastFeedTime = new Date(lastFeed.start_time as Date)

  const diff = Math.abs(current.getTime() - lastFeedTime.getTime()) / 36e5
  return (
    <div className="flex justify-center">
      <p className="text-xl font-semibold">{`last feed start: ${diff.toFixed(1)} hours ago`}</p>
    </div>
  )
}

export default LastFeed
