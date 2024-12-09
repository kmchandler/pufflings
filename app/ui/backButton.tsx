'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className='transition-duration-100 mb-4 mt-4 flex rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
    >
      previous page
    </button>
  );
}
