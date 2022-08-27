import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import { CgSun } from 'react-icons/cg'
import { FaMoon } from 'react-icons/fa'


export const DarkModeBtn = () => {

  const {systemTheme , theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() =>{
    setMounted(true);
  },[])

  if(!mounted) return null;
  
  const currentTheme = theme === "system" ? systemTheme : theme ;

  if(currentTheme ==="dark"){
    return (
      <button className="text-yellow-500 " role="button" onClick={() => setTheme('light')} >
        <CgSun size='1.4rem' />
      </button>
    )
  }

  else {
    return (
      <button className="text-gray-900 " role="button" onClick={() => setTheme('dark')} >
        <FaMoon size='1.4rem' />
      </button>
    )
  }
};

export default DarkModeBtn