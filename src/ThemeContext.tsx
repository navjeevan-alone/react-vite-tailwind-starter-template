import { createContext, useContext, useState } from "react"
const ThemeContext = createContext()
const ThemeContextUpdate = createContext()
export const ThemeStyle = (dark) => {
    return {
        background: dark ? "black" : "gray",
        color: dark ? "white" : "black",
        padding: "5rem",
        borderRadius: "50px"
    }
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
export const ThemeContextimport = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeContextUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}