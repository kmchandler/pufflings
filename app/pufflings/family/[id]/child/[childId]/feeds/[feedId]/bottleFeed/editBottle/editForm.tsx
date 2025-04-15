'use client';

import SubmitButton from '@/app/ui/submitButton';
import { editBottle } from '@/lib/feed';

const EditBottleForm = ({ feedInfo }: any) => {
  return (
    <form action={editBottle} className='flex flex-col items-center'>
      <div className='space-y-12 sm:space-y-16'>
        <div>
          <div>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label htmlFor='amount' className='block'>
                amount
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:max-w-md'>
                  <div className='shrink-0 select-none text-base text-gray-500 sm:text-sm/6'></div>
                  <input
                    id='amount'
                    name='amount'
                    type='text'
                    placeholder='ex: 6'
                    defaultValue={feedInfo?.bottleAmount || ''}
                    className='block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6'
                  />
                </div>
              </div>
            </div>
          </div>

          <input name='childId' value={feedInfo.child_id} hidden />
          <input name='feedId' value={feedInfo.id} hidden />
          <SubmitButton message='submit' />
        </div>
      </div>
    </form>
  );
};

export default EditBottleForm;
