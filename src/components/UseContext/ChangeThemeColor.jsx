import { useContext, createContext , useState} from "react";

const ThemeContext = createContext()

function ChangeThemeColor() {
    const [theme, setTheme] = useState('light')

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Toolbar />
            </ThemeContext.Provider >
        </>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}


function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <button 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
            style={{ backgroundColor: theme === "light" ? "#fff" : "#333", 
            color: theme === "light" ? "#000" : "#fff" }}> 
        Current Theme : {theme} 
        </button>
    )
}


export default ChangeThemeColor