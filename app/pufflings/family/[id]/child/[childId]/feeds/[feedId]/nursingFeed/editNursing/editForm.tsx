'use client';

import { editNursing } from '@/lib/feed';
import SubmitButton from '@/app/ui/submitButton';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

const EditNursingForm = ({ feedInfo }: any) => {
  return (
    <form action={editNursing} className='flex flex-col items-center'>
      <div className='space-y-12 sm:space-y-16'>
        <div>
          <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
            <label htmlFor='breast' className='block'>
              breast
            </label>
            <div className='mt-2 grid grid-cols-1'>
              <select
                id='breast'
                name='breast'
                defaultValue='left'
                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              >
                <option>left</option>
                <option>right</option>
                <option>both</option>
              </select>
              <ChevronDownIcon
                aria-hidden='true'
                className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
              />
            </div>
          </div>
          <div className='mt-2 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
            <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
              <label htmlFor='notes' className='block'>
                notes
              </label>
              <div className='mt-2 sm:col-span-2 sm:mt-0'>
                <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:max-w-md'>
                  <div className='shrink-0 select-none text-base text-gray-500 sm:text-sm/6'></div>
                  <input
                    id='notes'
                    name='notes'
                    type='textarea'
                    placeholder='ex: seemed to enjoy it'
                    defaultValue={feedInfo?.notes || ''}
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

export default EditNursingForm;
