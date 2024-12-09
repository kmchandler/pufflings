import { getChild } from '@/lib/child';
import { lastCreatedHeight } from '@/lib/height';
import { getFamily } from '@/lib/utils';
import { lastCreatedWeight } from '@/lib/weight';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {
  calculateAge,
  getMonthsDifference,
  getWeeksDifference,
} from '@/lib/currentAge';
import BackToChildButton from '@/app/ui/backToChildButton';

const childProfilePage = async ({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) => {
  const childInfo = await getChild(parseInt(childId));
  const familyInfo = await getFamily();
  const currentHeight = await lastCreatedHeight(childId);
  const currentWeight = await lastCreatedWeight(childId);
  const date = childInfo?.birthday as Date;

  const month = String(date?.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date?.getUTCDate()).padStart(2, '0');
  const year = String(date?.getUTCFullYear());

  let formattedBirthday = `${month}/${day}/${year}`;

  if (!date) {
    formattedBirthday = '';
  }

  const currentAge = calculateAge(date);

  let ageDisplay = '';

  if (currentAge >= 1) {
    let childsAge = currentAge;
    ageDisplay = `${childsAge} years`;
  } else if (currentAge < 1) {
    let childsAge = getMonthsDifference(date);
    if (childsAge < 1) {
      let childWeeks = getWeeksDifference(date);
      if (childWeeks == 1) {
        ageDisplay = `${childWeeks} week`;
      } else ageDisplay = `${childWeeks} weeks`;
    } else if (childsAge == 1) {
      ageDisplay = `${childsAge} month`;
    } else ageDisplay = `${childsAge} months`;
  }

  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;

  if (currentHeight && currentWeight) {
    return (
      <div className='flex flex-col'>
        <div className='w-fit self-center'>
          <BackToChildButton childId={childId} id={id} />
        </div>
        <div className='transition-duration-100 mt-4 inline-block flex flex-col rounded bg-tea-green px-4 py-2 text-center text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
          <p className='mb-2 text-5xl'>
            {childInfo?.name.toLocaleLowerCase()}{' '}
            {familyInfo.family_name.toLowerCase()}
          </p>
          <p className='mb-2'>age: {ageDisplay}</p>
          <p className='mb-2'>birthday: {formattedBirthday}</p>
          <p className='flex flex-row self-center'>
            height: {currentHeight?.feet} ft {currentHeight?.inches} in
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
          <p className='flex flex-row self-center'>
            weight: {currentWeight?.pounds} lbs {currentWeight?.ounces} oz
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!currentHeight && currentWeight) {
    return (
      <div className='flex flex-col justify-self-center'>
        <div className='w-fit self-center'>
          <BackToChildButton childId={childId} id={id} />
        </div>
        <div className='transition-duration-100 mt-4 inline-block flex w-fit flex-col rounded bg-tea-green px-4 py-2 text-center text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
          <p className='mb-2 text-5xl'>
            {childInfo?.name.toLocaleLowerCase()}{' '}
            {familyInfo.family_name.toLowerCase()}
          </p>
          <p className='mb-2'>age: {ageDisplay}</p>
          <p className='mb-2'>birthday: {formattedBirthday}</p>
          <p className='flex flex-row self-center'>
            height
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
          <p className='flex flex-row self-center'>
            weight: {currentWeight?.pounds} lbs {currentWeight?.ounces} oz
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (currentHeight && !currentWeight) {
    return (
      <div className='flex flex-col justify-self-center'>
        <div className='w-fit self-center'>
          <BackToChildButton childId={childId} id={id} />
        </div>
        <div className='transition-duration-100 mt-4 inline-block flex w-fit flex-col rounded bg-tea-green px-4 py-2 text-center text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
          <p className='mb-2 text-5xl'>
            {childInfo?.name.toLocaleLowerCase()}{' '}
            {familyInfo.family_name.toLowerCase()}
          </p>
          <p className='mb-2'>age: {ageDisplay}</p>
          <p className='mb-2'>birthday: {formattedBirthday}</p>
          <p className='flex flex-row self-center'>
            height: {currentHeight?.feet} ft {currentHeight?.inches} in
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
          <p className='flex flex-row self-center'>
            weight
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (!currentHeight && !currentWeight) {
    return (
      <div className='flex flex-col justify-self-center'>
        <div className='w-fit self-center'>
          <BackToChildButton childId={childId} id={id} />
        </div>
        <div className='transition-duration-100 mt-4 inline-block flex w-fit flex-col rounded bg-tea-green px-4 py-2 text-center text-3xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'>
          <p className='mb-2 text-5xl'>
            {childInfo?.name.toLocaleLowerCase()}{' '}
            {familyInfo.family_name.toLowerCase()}
          </p>
          <p className='mb-2'>age: {ageDisplay}</p>
          <p className='mb-2'>birthday: {formattedBirthday}</p>
          <p className='flex flex-row self-center'>
            height
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editHeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
          <p className='flex flex-row self-center'>
            weight
            <Link
              href={`/pufflings/family/${id}/child/${childId}/profile/editWeight`}
              className='ml-3 mt-2 flex text-xl'
            >
              {editIcon}
            </Link>
          </p>
        </div>
      </div>
    );
  }
};
export default childProfilePage;
