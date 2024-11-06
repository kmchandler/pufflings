import AddMemberButton from "@/app/ui/navigation/addMemberButton"
import clerkClient from "@/lib/clerkClient"

const MemberSearchResult = async ({ params: { id, resultId }}: {params: { id: string, resultId: string }}) => {

  const result = await clerkClient.users.getUserList({userId: [resultId]})
  const userInfo = result.data[0]
  const email = userInfo.emailAddresses[0].emailAddress

  return (
    <div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex flex-col bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-4">
        <div className="min-w-[180px] flex flex-col">
          <div className="self-center text-6xl mt-6">
            {userInfo.firstName} {userInfo.lastName}
          </div>
          <div className="self-center text-4xl mb-6 mt-1 ">
            {email}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <AddMemberButton id={id} resultId={resultId} />
      </div>
    </div>
  )
}



export default MemberSearchResult
