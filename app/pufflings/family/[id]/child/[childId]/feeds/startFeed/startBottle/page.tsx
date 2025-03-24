import SubmitButton from '@/app/ui/submitButton';
import { logFeedStart } from '@/lib/feed';

const startBottle = ({
  params: { childId },
}: {
  params: { childId: string };
}) => {
  return (
    <form action={logFeedStart} className='flex justify-center'>
      <input name='childId' value={childId} hidden />
      <SubmitButton message='start feed' />
    </form>
  );
};

export default startBottle;
