import { getDiaper, deleteDiaper } from "@/lib/diaper";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPoop } from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  "pee": <FontAwesomeIcon icon={faDroplet} />,
  "poop": <FontAwesomeIcon icon={faPoop} />,
  "pee:poop": <><FontAwesomeIcon icon={faDroplet} /><FontAwesomeIcon icon={faPoop} /></>
}

export default async function Diapers ({ params: { childId, diaperId }}: {params: { childId: string, diaperId: string}}) {

  const diaperInfo = await getDiaper(parseInt(diaperId))
  
  const dateTime = diaperInfo?.time_of_last_change

  if (!diaperInfo) return

    return (
      <div>
        <div className="mt-30 flex flex-col">
          <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
            single diaper info
          </div>
          <div className="text-3xl flex space-x-3 self-center mt-5 mb-5">
            <div>
              {iconMap[diaperInfo.type]}
            </div>
            <div>
              time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
            </div>
          </div>
          <form action={deleteDiaper} className="flex justify-center">
            <input name="childId" value={childId} hidden />
            <input name="diaperId" value={diaperInfo.id} hidden />
            <button type="submit" className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-2 mb-4 outline outline-1 outline-oxford-blue rounded">delete diaper</button>
          </form>
        </div>
      </div>
    )
};
