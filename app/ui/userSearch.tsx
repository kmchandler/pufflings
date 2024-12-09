import { searchFamilyMember } from '@/lib/family';

const UserSearchBar = ({ familyId }: { familyId: string }) => {
  return (
    <form action={searchFamilyMember} className='flex flex-col'>
      <div>
        <h4 className='text-3xl'>enter e-mail of user</h4>
      </div>
      <div className='relative rounded text-oxford-blue outline outline-1 outline-oxford-blue'>
        <input
          type='search'
          name='email'
          placeholder='e-mail'
          className='h-10 rounded-full bg-white px-5 pr-10 text-sm text-oxford-blue focus:outline-none'
        />
        <button type='submit' className='absolute right-0 top-0 mr-4 mt-3'>
          <svg
            className='h-6 w-6 fill-current'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            width='100px'
            height='100px'
          >
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </div>

      {/* Hide the family id in the form so we can access it as formdata later. */}
      <div className='hidden'>
        <input type='text' name='familyId' value={familyId} />
      </div>
    </form>
  );
};

export default UserSearchBar;
