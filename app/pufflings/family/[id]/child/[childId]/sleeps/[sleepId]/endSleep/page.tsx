import { createSleep, lastCreatedSleep } from "@/lib/sleep"

const endSleep = ({ params: { childId, sleepId }}: {params: { childId: string, sleepId: string }}) => {

  return (
    <form action={createSleep}>
      <input name="childId" value={childId} hidden readOnly/>
      <input name="sleepId" value={sleepId} hidden readOnly/>
      <button type="submit">end sleep</button>
    </form>
  )
}

export default endSleep
