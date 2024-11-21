import SubmitButton from "@/app/ui/submitButton"
import { logSleepStart } from "@/lib/sleep"

const startSleep = ({ params: { childId }}: {params: { childId: string }}) => {

  return (
    <form action={logSleepStart} className="flex justify-center">
      <input name="childId" value={childId} hidden/>
      <SubmitButton message="start sleep" />
    </form>
  )
}

export default startSleep
