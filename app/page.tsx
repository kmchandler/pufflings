import { fetchDashboardForUser } from "@/lib/dashboard";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import AddFamilyForm from "./pufflings/addFamily";

//this will be the home page

export default async function Home() {

  const dashboardData = await fetchDashboardForUser();
  console.log(dashboardData)

  const icon = <FontAwesomeIcon icon={faPeopleRoof} />

  if (dashboardData?.id) {

    return (
      <>
        <h1 className="flex order-1 text-oxford-blue text-6xl">dashboard</h1>
        <div className="flex order-2 text-oxford-blue text-3xl">
          list of recent family events here
        </div>
        <Link href={`/pufflings/family/${dashboardData?.id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">
            <div className="text-8xl pt-6 pl-6 pr-6 pb-2 self-center">
              {icon}
            </div>
            <div className="text-2xl self-center pb-4">
              the {dashboardData?.family_name.toLocaleLowerCase()} family
            </div>
        </Link>
      </>
    );
  } else {
    return (
      <AddFamilyForm />
    );
  }
}
