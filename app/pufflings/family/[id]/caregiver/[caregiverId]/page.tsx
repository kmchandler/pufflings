import { getUserById } from "@/lib/family";

const caregiverPage = async ({ params: { caregiverId }}: {params: { caregiverId: string}}) => {
  const user = await getUserById(caregiverId);

  return (
    <div className="text-oxford-blue py-2 px-4 rounded shadow flex bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-3xl flex flex-col mt-4 inline-block text-center">
      <p>{user.firstName} {user.lastName}</p>
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

export default caregiverPage;
