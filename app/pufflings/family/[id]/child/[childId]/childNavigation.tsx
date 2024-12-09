'use client';

import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { usePathname } from 'next/navigation'; // usePathname is a hook now imported from navigation
import { useRouter } from 'next/navigation';

const tabs = [
  { name: 'Dashboard', href: 'dashboard', current: true },
  { name: 'Feeds', href: 'feeds', current: false },
  { name: 'Diapers', href: 'diapers', current: false },
  { name: 'Sleeps', href: 'sleeps', current: false },
  { name: 'Medical', href: 'medical', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ChildNavigation = ({
  childId,
  familyId,
  childInfo,
}: {
  childId: string;
  familyId: string;
  childInfo: any;
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const tabChange = (e: any) => {
    const newRoute = e.target.value.toLowerCase();
    router.push(`/pufflings/family/${familyId}/child/${childId}/${newRoute}`);
  };

  return (
    <div className='border-b border-gray-200 pb-5 sm:pb-0'>
      <h1 className='text-2xl font-semibold text-gray-900'>
        {childInfo?.name?.toLowerCase()}
      </h1>
      <div className='mt-3 sm:mt-4'>
        <div className='grid grid-cols-1 sm:hidden'>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            defaultValue={tabs.find((tab) => pathName.includes(tab.href))?.href}
            aria-label='Select a tab'
            onChange={tabChange}
            className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
          >
            {tabs.map((tab) => (
              <option key={tab.name} value={tab.href}>
                {tab.name}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden='true'
            className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500'
          />
        </div>
        <div className='hidden sm:block'>
          <nav className='-mb-px flex space-x-8'>
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={`/pufflings/family/${familyId}/child/${childId}/${tab.href}`}
                aria-current={pathName.includes(tab.href) ? 'page' : undefined}
                className={classNames(
                  pathName.includes(tab.href)
                    ? 'border-oxford-blue text-oxford-blue'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-xl font-medium'
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ChildNavigation;
