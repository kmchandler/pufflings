import { logNursingEnd } from '@/lib/feed';
import { getChild } from '@/lib/child';
import SubmitButton from '@/app/ui/submitButton';

const endNursing = async ({
  params: { childId, feedId },
}: {
  params: { childId: string; feedId: string };
}) => {
  const childInfo = async (childId: number) => {
    return await getChild(childId);
  };

  const child = await childInfo(Number(childId));

  return (
    <div className='flex flex-col'>
      <h2 className='self-center text-4xl text-oxford-blue [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        {child?.name.toLowerCase()} is eating...
      </h2>
      <form className='flex self-center' action={logNursingEnd}>
        <input name='childId' value={childId} hidden />
        <input name='feedId' value={feedId} hidden />
        <SubmitButton message='end feed' />
      </form>
    </div>
  );
};

export default endNursing;
