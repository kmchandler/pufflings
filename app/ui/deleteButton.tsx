'use client';
import { deleteChild } from "@/lib/child";

const handleClick = async (childId: string, familyId: string) => {
  await deleteChild(parseInt(childId), familyId)
}

const DeleteButton = ({childId, familyId}: {childId: string, familyId: string}) => {
  return <button onClick={() => handleClick(childId, familyId)} className="text-oxford-blue py-2 px-4 rounded shadow flex transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7 outline outline-1 outline-oxford-blue rounded hover:bg-foreground-50 self-center">remove child</button>
}

export default DeleteButton
