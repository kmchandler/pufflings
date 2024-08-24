import { fetchDashboardForUser } from "@/lib/dashboard";
import Link from "next/link";

//this will be the home page

export default async function Home() {

  const dashboardData = await fetchDashboardForUser();

  return (
    <>
      <h1 className="flex order-1 text-oxford-blue text-6xl">dashboard</h1>
      <div className="flex order-2 text-oxford-blue text-3xl">
        list of recent family events here
      </div>
      <Link href={`/pufflings/family/${dashboardData?.id}`} className="text-oxford-blue py-2 px-4 rounded shadow flex order-3 hover:bg-atomic-tangerine bg-tea-green hover:text-light-yellow transition transition-all transition-duration-100 text-xl">
          the {dashboardData?.family_name.toLocaleLowerCase()} family
      </Link>
    </>
  );
}
