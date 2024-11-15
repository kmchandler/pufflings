import { logSleepStart } from "@/lib/sleep"

const startSleep = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={logSleepStart} className="flex justify-center">
      <input name="childId" value={childId} hidden/>
      <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">start sleep</button>
    </form>
  )
}

export default startSleep
