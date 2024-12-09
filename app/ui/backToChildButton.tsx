import Link from "next/link";

export default function BackToChildButton({ childId, id }:{ childId: string, id:string }) {

  return (
    <Link className='text-oxford-blue py-2 px-4 rounded shadow transition hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex mt-4 mb-4 outline outline-1 outline-oxford-blue hover:bg-foreground-50 rounded' href={`/pufflings/family/${id}/child/${childId}`}>previous page</Link>
  );
}
