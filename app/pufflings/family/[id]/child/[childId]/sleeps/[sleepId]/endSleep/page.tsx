import { getChild } from "@/lib/child"
import { createSleep } from "@/lib/sleep"

const endSleep = async ({ params: { childId, sleepId }}: {params: { childId: string, sleepId: string }}) => {

  const childInfo = async (childId: number) => {
    return await getChild(childId)
  }

  const child = await childInfo(Number(childId))

  return (
    <div className="justify-items-center">
      <h2 className="text-4xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        {child?.name.toLowerCase()} is sleeping
      </h2>
      <form action={createSleep} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
        <input name="childId" value={childId} hidden readOnly/>
        <input name="sleepId" value={sleepId} hidden readOnly/>
        <button type="submit">end sleep</button>
      </form>
    </div>
  )
}

export default endSleep
