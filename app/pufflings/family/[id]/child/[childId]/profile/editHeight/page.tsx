'use client';

import { createHeight } from '@/lib/height';

const EditHeightForm = ({
  params: { childId },
}: {
  params: { childId: string };
}) => {
  return (
    <form action={createHeight} className='flex'>
      <div>
        <label className='mb-3 flex justify-self-center text-3xl'>height</label>
        <div className='mt-4 flex flex-row'>
          <div className='flex flex-row'>
            <input
              name='feet'
              className='relative mr-2 w-8 self-center rounded text-center text-xl text-oxford-blue outline outline-1 outline-oxford-blue'
            />
            <div className='mr-3 mt-1 text-xl'>feet</div>
          </div>
          <div className='flex flex-row'>
            <input
              name='inches'
              className='relative mr-2 w-8 self-center rounded text-center text-xl text-oxford-blue outline outline-1 outline-oxford-blue'
            />
            <div className='mt-1 text-xl'>inches</div>
          </div>
          <input name='childId' value={childId} hidden />
        </div>
        <button
          type='submit'
          className='transition-duration-100 order-3 ml-4 mt-4 flex justify-self-center rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
        >
          {' '}
          update height{' '}
        </button>
      </div>
    </form>
  );
};

export default EditHeightForm;
