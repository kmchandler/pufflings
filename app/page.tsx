import { fetchDashboardForUser } from '@/lib/dashboard';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import AddFamilyForm from './pufflings/addFamily';
import Image from 'next/image';

//this will be the home page

export default async function Home() {
  const dashboardData = await fetchDashboardForUser();

  const icon = <FontAwesomeIcon icon={faPeopleRoof} />;

  if (dashboardData?.id) {
    return (
      <div className='flex flex-col items-center'>
        <div>
          <Image
            src='/pufflingsIcon.png'
            width='140'
            height='140'
            alt='pufflings icon'
          />
        </div>
        <h1 className='text-ut-orange mb-5 text-5xl'>pufflings</h1>
        <Link
          href={`/pufflings/family/${dashboardData?.id}`}
          className='transition-duration-100 order-3 mt-7 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition-all hover:drop-shadow-xl'
        >
          <div className='self-center pb-2 pl-6 pr-6 pt-6 text-8xl'>{icon}</div>
          <div className='self-center pb-4 text-2xl'>
            the {dashboardData?.family_name.toLocaleLowerCase()} family
          </div>
        </Link>
      </div>
    );
  } else {
    return <AddFamilyForm />;
  }
}
