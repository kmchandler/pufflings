import { getChild } from '@/lib/child';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimneyMedical,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { BabyBottleIcon } from 'hugeicons-react';
import { DiaperIcon } from 'hugeicons-react';
import DeleteButton from '../../../../../ui/deleteButton';

export default async function Child({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
}) {
  const childInfo = await getChild(parseInt(childId));

  const diaperIcon = <DiaperIcon color='oxford-blue' size='99' />;
  const feedIcon = <BabyBottleIcon color='oxford-blue' size='99' />;
  const medicalIcon = <FontAwesomeIcon icon={faHouseChimneyMedical} />;
  const sleepIcon = <FontAwesomeIcon icon={faMoon} />;

  const activities = [
    {
      url: `/pufflings/family/${id}/child/${childId}/diapers`,
      icon: diaperIcon,
      label: 'diapers',
    },
    {
      url: `/pufflings/family/${id}/child/${childId}/sleeps`,
      icon: sleepIcon,
      label: 'sleeps',
    },
    {
      url: `/pufflings/family/${id}/child/${childId}/feeds`,
      icon: feedIcon,
      label: 'feeds',
    },
    {
      url: `/pufflings/family/${id}/child/${childId}/medical`,
      icon: medicalIcon,
      label: 'medical',
    },
  ];

  return (
    <div className='mt-8 flex flex-col'>
      <div className='flex justify-center text-6xl'>
        <span className='mb-5 text-atomic-tangerine [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
          {childInfo?.name.toLocaleLowerCase()}
        </span>
      </div>
      <Link
        href={`/pufflings/family/${id}/child/${childId}/profile`}
        className='transition-duration-100 mt-1 flex w-fit place-self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      >
        view {childInfo?.name.toLocaleLowerCase()}&apos;s profile
      </Link>
      <div className='flex flex-row flex-wrap justify-center md:space-x-10'>
        {activities.map((activity) => {
          return (
            <div key={`label_${activity.label}`}>
              <Link
                href={activity.url}
                className='transition-duration-100 mt-7 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
              >
                <div className='flex min-w-[180px] flex-col'>
                  <div className='mt-6 self-center text-8xl'>
                    {activity.icon}
                  </div>
                  <div className='mb-3 mt-1 self-center text-4xl'>
                    {activity.label}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <DeleteButton childId={childId} familyId={id} />
    </div>
  );
}
