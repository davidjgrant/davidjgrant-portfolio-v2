import Logo from '../components/logo';
import DarkModeBtn from '../components/darkModeBtn';
import Nav from '../components/nav';
import { MobileNav } from './MobileNav';

const Header = () => { 

  return (
    <>
      <header className="h-15 z-20 fixed w-screen mb-5 px-0 sm:px-6 xl:px-0">
        <div className="container mx-auto px-4 sm:pl-0 py-4 grid grid-cols-3 relative">
          <Logo />
          <div className="nav-wrapper flex justify-self-end items-center gap-6">
            <Nav isFooter={false} />
            <DarkModeBtn />
          </div>
        </div>
        <MobileNav />
      </header>
    </>
  );
};

export default Header;