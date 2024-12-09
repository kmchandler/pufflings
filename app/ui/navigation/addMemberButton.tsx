'use client';
import { addFamilyMember } from '@/lib/family';

const handleClick = async (id: string, resultId: string) => {
  await addFamilyMember(id, resultId);
};

const AddMemberButton = ({
  id,
  resultId,
}: {
  id: string;
  resultId: string;
}) => {
  return (
    <button
      className='transition-duration-100 mt-7 flex flex-col self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:drop-shadow-xl'
      onClick={() => handleClick(id, resultId)}
    >
      add this user to my family
    </button>
  );
};

export default AddMemberButton;
