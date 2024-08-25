import NavBar from "@/app/ui/navigation";
import { getChild } from "@/lib/child";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPoop } from '@fortawesome/free-solid-svg-icons'

export default async function Diapers ({ params: { childId, id }}: {params: { childId: string, id: string}}) {

  const childInfo = await getChild(parseInt(childId))

  const diaperInfo = childInfo?.diapers

  const peeIcon = <FontAwesomeIcon icon={faDroplet} />
  const poopIcon = <FontAwesomeIcon icon={faPoop} />

  return (
      <div className="mt-36 flex flex-col">
        <div className="self-center text-6xl">
          diapers
        </div>
        <div className="text-3xl self-center">
          {diaperInfo?.map(diaper => {
            console.log(diaper.type)
            if (diaper.type === 'pee') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                  <div className="flex space-x-3s">
                    <div>
                      time: {diaper.time_of_last_change.toISOString()}
                    </div>
                    <div>
                      type: {peeIcon}
                    </div>
                  </div>
                </Link>
              )
            } else if (diaper.type === 'poop') {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link href={`/pufflings/family/${id}/child/${childId}/diapers/${diaper.id}`}>
                  <div className="flex space-x-3s">
                    <div>
                      time: {diaper.time_of_last_change.toISOString()}
                    </div>
                    <div>
                      type: {poopIcon}
                    </div>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
  );
};
