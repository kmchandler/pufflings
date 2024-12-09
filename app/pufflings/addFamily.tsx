import { createFamily } from '@/lib/family';

const AddFamilyForm = () => {
  return (
    <form action={createFamily}>
      <div className='col flex'>
        create a new family below, or ask to be added to an existing family.
      </div>

      <label className='text-3xl'>family name</label>
      <input
        type='text'
        name='family_name'
        className='rounded text-2xl outline outline-1 outline-oxford-blue'
      />
      <button
        type='submit'
        className='transition-duration-100 mt-7 flex rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
      >
        {' '}
        submit new family{' '}
      </button>
    </form>
  );
};

export default AddFamilyForm;
