import { getFamily } from "@/lib/family";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


export default async function Family ({ params: { id }}: {params: { id: string}}) {
  
  const familyInfo = await getFamily(parseInt(id));

  const children = familyInfo?.children

  const outlineIcon = <Image src="/pufflingsOutline.png" width="100" height="100" alt="puffling outline icon" />

  return (
    <div className="flex flex-col mt-36">
      <div className="text-6xl self-center text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
        my family
      </div>
      <div className="text-3xl self-center flex flex-row space-x-10">
        {children?.map(child => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/pufflings/family/${id}/child/${child.id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
              <div className="self-center text-8xl mt-4 ml-8 mr-8 mb-2">
                {outlineIcon}
              </div>
              <div className="self-center text-4xl mb-2 text">
                  {child.name.toLowerCase()}
              </div>
            </Link>
          )
        })}
      </div>
      <Link href={`/pufflings/family/${id}/addChild`}>Add a child</Link>
    </div>
  );
};
