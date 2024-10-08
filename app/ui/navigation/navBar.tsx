import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


// NavBar component 

const NavBar = () => {
  const icon = <FontAwesomeIcon icon={faHouse} />
  const pufflingsIcon = <Image src="/pufflingsIcon.png" width="40" height="40" alt="pufflings icon" />
  return (
    <nav className="flex bg-oxford-blue fixed w-full top-0 start-0 text-atomic-tangerine">
      <div className="flex flex-row p-3 w-full">
        <span className="flex pl-2 text-2xl">{pufflingsIcon}</span>
           <a href="/" className="ml-3 mt-2 text-2xl">{icon}</a>
          <div className="ml-auto mt-2 mr-1">
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
