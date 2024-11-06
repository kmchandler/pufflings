'use client';
import { addFamilyMember } from "@/lib/family";

const handleClick = async (id: string, resultId: string) => {
  await addFamilyMember(id, resultId)
}

const AddMemberButton = ({id, resultId}: {id: string, resultId: string}) => {
  return <button className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7 outline outline-1 outline-oxford-blue rounded self-center" onClick={() => handleClick(id, resultId)}>add this user to my family</button>
}

export default AddMemberButton
