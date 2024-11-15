import { getChild } from "@/lib/child";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPoop } from '@fortawesome/free-solid-svg-icons'
import { dateFormatter } from "@/lib/dateFormatter";
import { timeFormatter } from "@/lib/timeFormatter";

export default async function Diapers ({ params: { childId, id }}: {params: { childId: string, id: string}}) {

  const childInfo = await getChild(parseInt(childId))

  const diaperInfo = childInfo?.diapers

  const peeIcon = <FontAwesomeIcon icon={faDroplet} />
  const poopIcon = <FontAwesomeIcon icon={faPoop} />

  return (
      <div className="mt-36 flex flex-col">
        <div className="self-center text-6xl text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          diapers
        </div>
        <div className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded self-center">
           <Link href={`/pufflings/family/${id}/child/${childId}/diapers/addDiaper`}>
            add diaper
           </Link>
         </div>
         <div className="text-3xl self-center">
          {diaperInfo?.slice().reverse().map(diaper => {
            const dateTime = diaper.time_of_last_change;

            if (diaper.type === 'pee') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                  <div className="flex space-x-3 space-y-3">
                    <div className="mt-3">
                      {peeIcon}
                    </div>
                    <div>
                      time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            } else if (diaper.type === 'poop') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                  <div className="flex space-x-3 space-y-3">
                    <div className="mt-3">
                      {poopIcon}
                    </div>
                    <div>
                      time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            } else if (diaper.type === 'pee:poop') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                  <div className="flex space-x-3 space-y-3">
                    <div className="mt-3">
                      {peeIcon}{poopIcon}
                    </div>
                    <div>
                      time: {dateFormatter.format(dateTime)} {timeFormatter.format(dateTime).toLowerCase()}
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
  );
};
