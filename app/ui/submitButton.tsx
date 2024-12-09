'use client';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ message }: { message: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='transition-duration-100 order-3 mt-7 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition-all hover:drop-shadow-xl disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400'
    >
      {message}
    </button>
  );
};

export default SubmitButton;
