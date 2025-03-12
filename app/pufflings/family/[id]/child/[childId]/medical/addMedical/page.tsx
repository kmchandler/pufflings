'use client';
import SubmitButton from '@/app/ui/submitButton';
import { createMedical } from '@/lib/medical';

const AddMedicalForm = ({
  params: { childId },
}: {
  params: { childId: string };
}) => {
  const options = [
    {
      value: 'fever',
      label: 'fever',
    },
    {
      value: 'illness',
      label: 'illness',
    },
    {
      value: 'injury',
      label: 'injury',
    },
    {
      value: 'other',
      label: 'other',
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='mb-5 self-center text-4xl text-oxford-blue [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        add medical
      </div>
      <form action={createMedical} className='flex flex-col'>
        <label className='mb-2 self-center text-3xl'>type</label>
        <div className='flex flex-row self-center'>
          <select
            name='type'
            id='medTypes'
            className='self-center rounded text-xl text-oxford-blue outline outline-1 outline-oxford-blue'
          >
            <option selected disabled>
              select type
            </option>
            {options.map((option) => {
              return (
                <option key={`med_option_${option.value}`} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        <label className='mb-2 mt-5 self-center text-3xl'>notes</label>
        <textarea
          name='notes'
          className='relative self-center rounded text-center text-xl text-oxford-blue outline outline-1 outline-oxford-blue'
        />

        <input name='childId' value={childId} hidden />

        <SubmitButton message='submit' />
      </form>
    </div>
  );
};

export default AddMedicalForm;
