import { fetchDashboardForUser } from "@/lib/dashboard";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import AddFamilyForm from "./pufflings/addFamily";
import Image from 'next/image';

//this will be the home page

export default async function Home() {

  const dashboardData = await fetchDashboardForUser();

  const icon = <FontAwesomeIcon icon={faPeopleRoof} />

  if (dashboardData?.id) {

    return (
      <div className="flex flex-col items-center">
        <div>
          <Image src="/pufflingsIcon.png" width="140" height="140" alt="pufflings icon" />
        </div>
        <h1 className="text-oxford-blue text-5xl
        mb-5">pufflings</h1>
        <Link href={`/pufflings/family/${dashboardData?.id}`} className="text-oxford-blue py-2 px-4 rounded shadow order-3 bg-tea-green hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
            <div className="text-8xl pt-6 pl-6 pr-6 pb-2 self-center">
              {icon}
            </div>
            <div className="text-2xl self-center pb-4">
              the {dashboardData?.family_name.toLocaleLowerCase()} family
            </div>
        </Link>
      </div>
    );
  } else {
    return (
      <AddFamilyForm />
    );
  }
}
