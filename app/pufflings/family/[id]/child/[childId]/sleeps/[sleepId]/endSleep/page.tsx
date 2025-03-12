import SubmitButton from '@/app/ui/submitButton';
import { getChild } from '@/lib/child';
import { createSleep } from '@/lib/sleep';

const endSleep = async ({
  params: { childId, sleepId },
}: {
  params: { childId: string; sleepId: string };
}) => {
  const childInfo = async (childId: number) => {
    return await getChild(childId);
  };

  const child = await childInfo(Number(childId));

  return (
    <div className='justify-items-center'>
      <h2 className='self-center text-4xl text-oxford-blue [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>
        {child?.name.toLowerCase()} is sleeping...
      </h2>
      <form
        action={createSleep}
        className='transition-duration-100 order-3 mt-7 flex flex-col rounded bg-tea-green px-4 py-2 text-xl text-oxford-blue shadow transition transition-all hover:drop-shadow-xl'
      >
        <input name='childId' value={childId} hidden readOnly />
        <input name='sleepId' value={sleepId} hidden readOnly />
        <SubmitButton message='end sleep' />
      </form>
    </div>
  );
};

export default endSleep;
