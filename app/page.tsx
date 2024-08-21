import NavBar from "./ui/navigation";
import { fetchDashboardForUser } from "@/lib/dashboard";

//this will be the home page

export default async function Home() {

  const dashboardData = await fetchDashboardForUser();
  console.log(dashboardData?.id);

  return (
    <main className="flex h-screen w-screen justify-center items-center flex-wrap flex-col">
      <NavBar />
      <h1 className="flex order-1">Dashboard</h1>
      <div className="flex order-2">
        list of recent family events here
      </div>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex order-3">
          View Family
      </button>
    </main>
  );
}
