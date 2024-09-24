'use client';
import { addFamilyMember } from "@/lib/family";

const handleClick = async (id: string, resultId: string) => {
  await addFamilyMember(id, resultId)
}

const AddMemberButton = ({id, resultId}: {id: string, resultId: string}) => {
  return <button onClick={() => handleClick(id, resultId)}>add this user to my family</button>
}

export default AddMemberButton
