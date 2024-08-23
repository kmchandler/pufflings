import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


// NavBar component 

const NavBar = () => {
  const element = <FontAwesomeIcon icon={faHouse} />
  return (
    <nav className="flex bg-oxford-blue fixed w-full top-0 start-0 text-atomic-tangerine">
      <div className="flex flex-row p-3 mt-2 w-full">
        <span className="flex">pufflings</span>
           <a href="/" className="ml-8">{element}</a>
          <div className="ml-auto">
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
