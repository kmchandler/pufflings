import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// NavBar component

const NavBar = () => {
  const icon = <FontAwesomeIcon icon={faHouse} />;
  const pufflingsIcon = (
    <Image
      src='/pufflingsIcon.png'
      width='40'
      height='40'
      alt='pufflings icon'
    />
  );
  return (
    <nav className='fixed start-0 top-0 flex w-full bg-oxford-blue text-tea-green'>
      <div className='flex w-full flex-row p-3'>
        <span className='flex pl-2 text-2xl'>{pufflingsIcon}</span>
        <a href='/' className='ml-3 mt-1 text-3xl'>
          {icon}
        </a>
        <div className='ml-auto mr-1 mt-2'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
