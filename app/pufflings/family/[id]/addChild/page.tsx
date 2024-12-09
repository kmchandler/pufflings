import { createChild } from '@/lib/child';

const AddChildForm = () => {
  return (
    <form action={createChild}>
      <div className='flex flex-col'>
        <label className='text-3xl'>name</label>
        <input
          type='text'
          name='name'
          className='rounded outline outline-1 outline-oxford-blue'
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-3xl'>birthday</label>
        <input
          type='date'
          name='birthday'
          className='rounded text-2xl outline outline-1 outline-oxford-blue'
        />
      </div>
      <button
        type='submit'
        className='transition-duration-100 order-3 mt-7 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
      >
        {' '}
        submit{' '}
      </button>
    </form>
  );
};

export default AddChildForm;
