import { getChild } from "@/lib/child";
import { lastCreatedHeight } from "@/lib/height";
import { getFamily } from "@/lib/utils";
import { lastCreatedWeight } from "@/lib/weight";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { calculateAge, getMonthsDifference } from "@/lib/currentAge";
import BackButton from "@/app/ui/backButton";


const childProfilePage = async ({ params: { childId, id }}: {params: { childId: string, id:string }}) => {

  const childInfo = await getChild(parseInt(childId))
  const familyInfo = await getFamily();
  const currentHeight = await lastCreatedHeight(childId);
  const currentWeight = await lastCreatedWeight(childId);
  const date = childInfo?.birthday as Date;

  const month = String(date?.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date?.getUTCDate()).padStart(2, '0');
  const year = String(date?.getUTCFullYear());

  let formattedBirthday = `${month}/${day}/${year}`;

  if (!date) {
    formattedBirthday = ''
  }

  const currentAge = calculateAge(date);

  let ageDisplay = ''

  if (currentAge >= 1) {
    let childsAge = currentAge
    ageDisplay = `${childsAge} years`
  } else if (currentAge < 1) {
   let childsAge = getMonthsDifference(date);
   ageDisplay = `${childsAge} months`
  }
  
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />

  if (currentHeight && currentWeight) {
    return (
      <div className="flex flex-col">
        <div className="w-fit self-center">
          <BackButton />
        </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">age: {ageDisplay}</p>
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
      <div className="flex flex-col justify-self-center">
        <div className="w-fit self-center">
          <BackButton />
        </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center w-fit">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">age: {ageDisplay}</p>
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
      <div className="flex flex-col justify-self-center">
        <div className="w-fit self-center">
          <BackButton />
        </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center w-fit">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">age: {ageDisplay}</p>
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
      <div className="flex flex-col justify-self-center">
        <div className="w-fit self-center">
          <BackButton />
        </div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center w-fit">
        <p className="mb-2 text-5xl">{childInfo?.name.toLocaleLowerCase()} {familyInfo.family_name.toLowerCase()}</p>
        <p className="mb-2">age: {ageDisplay}</p>
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
