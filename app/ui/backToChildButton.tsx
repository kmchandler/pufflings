import Link from 'next/link';

export default function BackToChildButton({
  childId,
  id,
}: {
  childId: string;
  id: string;
}) {
  return (
    <Link
      className='transition-duration-100 w-fll mb-4 mt-4 flex self-center rounded px-4 py-2 text-xl text-oxford-blue shadow outline outline-1 outline-oxford-blue transition transition-all hover:bg-foreground-50 hover:drop-shadow-xl'
      href={`/pufflings/family/${id}/child/${childId}`}
    >
      previous page
    </Link>
  );
}
