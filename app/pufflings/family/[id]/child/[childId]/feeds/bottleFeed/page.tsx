import BackButton from '@/app/ui/backButton';
import SubmitButton from '@/app/ui/submitButton';
import { logBottleStart } from '@/lib/feed';

export default async function bottleFeed({
  params: { childId, id },
}: {
  params: { childId: string; id: string };
  searchParams: { page: string };
}) {
  return (
    <div className='mt-5 flex flex-col'>
      <div className='self-center text-6xl text-oxford-blue [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        bottle
      </div>
      <div className='flex w-fit flex-col self-center'>
        <div className='flex flex-row self-center'>
          <form action={logBottleStart} className='flex justify-center'>
            <input name='childId' value={childId} hidden />
            <SubmitButton message='start feed' />
          </form>
        </div>
        <div className='self-center'>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
