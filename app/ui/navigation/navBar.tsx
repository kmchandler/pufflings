import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


// NavBar component 

const NavBar = () => {
  return (
    <nav className="flex bg-white dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-row p-3 mt-2 w-full">
        <span className="flex dark:text-white">pufflings</span>
           <a href="#" className="ml-8 text-white">dashboard</a>
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
