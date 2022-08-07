import { useTheme } from 'next-themes'
import { useState, useEffect } from "react";

const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() =>{
    setMounted(true);
  },[])

  const renderThemeChanger = () => {
    if(!mounted) return null;
    
    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <button className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} >Light</button>
      )
    }

    else {
      return (
        <button className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} >Dark</button>
      )
    }
  };

  return (
    <header className="h-15 shadow-sm dark:border-gray-700 mb-5">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;