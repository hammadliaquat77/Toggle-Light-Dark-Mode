import './App.css'
import React, { useEffect, useState } from 'react';
import Btn from './Components/Btn';
import Card from './Components/Card';
import { ThemeProvider } from './context/theme'

function App() {

   const [themeMode, setThemeMode] = useState("light");
   const lightTheme = () => {
    setThemeMode("light")
   }
    const darkTheme = () => {
      setThemeMode("dark")
    }

    useEffect(() => {
       document.querySelector("html").classList.remove("dark", "light")
       document.querySelector("html").classList.add(themeMode)
    }, [themeMode])
    

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
