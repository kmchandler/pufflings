'use client';

import SubmitButton from '@/app/ui/submitButton';
import { editBottle } from '@/lib/feed';

const EditSolidsForm = ({
  params: { childId, feedId },
}: {
  params: { childId: string; feedId: string };
}) => {
  return (
    <form action={editBottle} className='flex flex-col items-center'>
      <label className='mb-2 self-center text-3xl'>updated amount</label>
      <div className='flex flex-row'>
        <input
          name='amount'
          className='relative mr-2 w-12 self-center rounded text-center text-xl text-oxford-blue outline outline-1 outline-oxford-blue'
        />
        <div className='text-xl'>oz</div>
      </div>

      <input name='childId' value={childId} hidden />
      <input name='feedId' value={feedId} hidden />
      <SubmitButton message='submit' />
    </form>
  );
};

export default EditSolidsForm;
