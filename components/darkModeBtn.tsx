import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

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
      <button className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} >Light</button>
    )
  }

  else {
    return (
      <button className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} >Dark</button>
    )
  }
};

export default DarkModeBtn