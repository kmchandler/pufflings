import { getDiaper } from "@/lib/diaper";
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPoop } from '@fortawesome/free-solid-svg-icons'

export default async function Diapers ({ params: { diaperId }}: {params: { diaperId: string}}) {

  const diaperInfo = await getDiaper(parseInt(diaperId))
  
  const dateTime = diaperInfo?.time_of_last_change

  const peeIcon = <FontAwesomeIcon icon={faDroplet} />
  const poopIcon = <FontAwesomeIcon icon={faPoop} />

  if (diaperInfo?.type == "pee")
    return (
      <div>
        <div className="mt-36 flex flex-col">
          <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
            single diaper info
          </div>
          <div className="text-3xl flex space-x-3 self-center mt-1">
            <div>
              {peeIcon}
            </div>
            <div>
              time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
            </div>
          </div>
        </div>
      </div>
    ); else 
        return (
          <div>
            <div className="mt-36 flex flex-col">
              <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
                single diaper info
              </div>
              <div className="text-3xl flex space-x-3">
                <div>
                  {poopIcon}
                </div>
                <div>
                  time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
                </div>
              </div>
            </div>
          </div>
        );
};
