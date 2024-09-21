'use client';
import { deleteChild } from "@/lib/child";

const handleClick = async (childId: string, familyId: string) => {
  await deleteChild(parseInt(childId), familyId)
}

const DeleteButton = ({childId, familyId}: {childId: string, familyId: string}) => {
  return <button onClick={() => handleClick(childId, familyId)}>Delete Kiddo</button>
}

export default DeleteButton
