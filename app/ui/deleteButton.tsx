'use client';
import { deleteChild } from '@/lib/child';

const handleClick = async (childId: string, familyId: string) => {
  await deleteChild(parseInt(childId), familyId);
};

const DeleteButton = ({
  childId,
  familyId,
}: {
  childId: string;
  familyId: string;
}) => {
  return (
    <button
      onClick={() => handleClick(childId, familyId)}
      className='transition-duration-100 flex flex-col self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
    >
      remove child
    </button>
  );
};

export default DeleteButton;
