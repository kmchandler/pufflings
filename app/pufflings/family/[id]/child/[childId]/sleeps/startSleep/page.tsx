import { logSleepStart } from "@/lib/sleep"

const startSleep = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={logSleepStart}>
      <input name="childId" value={childId} hidden/>
      <button type="submit">start sleep</button>
    </form>
  )
}

export default startSleep
