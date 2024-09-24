import { searchFamilyMember } from "@/lib/family"

const MemberSearchResult = () => {
  return (
    <div>
      <div className="text-oxford-blue py-2 px-4 rounded shadow flex flex-col bg-tea-green transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl mt-7">
        <div className="min-w-[180px] flex flex-col">
          <div className="self-center text-6xl mt-6">
            {/* {userFirstName} {userLastName} */}
            Name
          </div>
          <div className="self-center text-4xl mb-3 mt-1 ">
            {/* {trimmedEmail} */}
            Email
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberSearchResult
