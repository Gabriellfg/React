import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeToggleButton = () => {
    const { theme, toggleTheme}  = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>
            Mudar para o tema { theme === 'light' ? 'Escuro' : 'Claro' }
        </button>
    )
}
export default ThemeToggleButton