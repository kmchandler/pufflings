'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button onClick={handleBackClick} className='text-oxford-blue py-2 px-4 rounded shadow transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded'>previous page</button>
  );
}
