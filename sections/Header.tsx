import Logo from '../components/logo';
import DarkModeBtn from '../components/darkModeBtn';
import Nav from '../components/nav';

const Header = () => { 

  return (
    <header className="h-15 z-10 fixed w-screen mb-5">
      <div className="container mx-auto px-4 sm:px-0 py-4 flex justify-between items-center">
        <Logo />
        <div className="nav-wrapper flex justify-between items-center gap-6">
          <Nav />
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;