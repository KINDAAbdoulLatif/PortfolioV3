"use client"
import React, { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: ()=>{}
});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
      <button className="bg-black absolute top-0 left-1/2" onClick={toggleTheme}>
        Changer theme: {theme}
      </button>
    </ThemeContext.Provider>
  );
}
export function useTheme(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    
    return {
        // isLight: theme === 'light',
        // isDark: theme === 'dark',
        theme,
        toggleTheme
    }
}