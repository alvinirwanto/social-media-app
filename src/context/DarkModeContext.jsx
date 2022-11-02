import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    )

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }} >
            {children}
        </DarkModeContext.Provider>
    )
}