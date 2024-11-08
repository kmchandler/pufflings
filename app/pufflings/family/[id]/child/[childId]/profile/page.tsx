import { getChild } from "@/lib/child";
import { lastCreatedHeight } from "@/lib/height";
import { getFamily } from "@/lib/utils";
import { lastCreatedWeight } from "@/lib/weight";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


const childProfilePage = async ({ params: { childId, id }}: {params: { childId: string, id:string }}) => {

  const childInfo = await getChild(parseInt(childId))
  const familyInfo = await getFamily(parseInt(id));
  const currentHeight = await lastCreatedHeight(childId);
  const currentWeight = await lastCreatedWeight(childId);
  const date = childInfo?.birthday;

  const month = String(date?.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date?.getUTCDate()).padStart(2, '0');
  const year = String(date?.getUTCFullYear());

  const formattedBirthday = `${month}/${day}/${year}`;
  console.log(formattedBirthday, "formattedBday")
  
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />

  // Info I'd like to have on this page- age(need to collect birthday to calculate), current height, current weight, (possibly blood type?)

  if (currentHeight && currentWeight) {
    return (
      <div className="flex flex-col">
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">birthday: {formattedBirthday}</p>
        <p className="flex flex-row self-center">height: {currentHeight?.feet} ft {currentHeight?.inches} in
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
        <p className="flex flex-row self-center">weight: {currentWeight?.pounds} lbs {currentWeight?.ounces} oz
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
      </div> 
     </div>
    )
  }

  if (!currentHeight && currentWeight) {
    return (
      <div className="flex flex-col">
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">birthday: {formattedBirthday}</p>
        <p className="flex flex-row self-center">height
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
        <p className="flex flex-row self-center">weight: {currentWeight?.pounds} lbs {currentWeight?.ounces} oz
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
      </div> 
     </div>
    )
  }

  if (currentHeight && !currentWeight) {
    return (
      <div className="flex flex-col">
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">birthday: {formattedBirthday}</p>
        <p className="flex flex-row self-center">height: {currentHeight?.feet} ft {currentHeight?.inches} in
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
        <p className="flex flex-row self-center">weight
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
      </div> 
     </div>
    )
  }

  if (!currentHeight && !currentWeight) {
    return (
      <div className="flex flex-col">
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">birthday: {formattedBirthday}</p>
        <p className="flex flex-row self-center">height
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
        <p className="flex flex-row self-center">weight
          <Link href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`} className="text-xl flex ml-3 mt-2">{editIcon}</Link>
        </p>
      </div> 
     </div>
    )
  }
}
export default childProfilePage;
