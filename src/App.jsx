import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton'

function App() {

    return (
        <ThemeProvider>
        <div>
            <nav>Menu de Navegação</nav>
            <ThemeToggleButton>
                
            </ThemeToggleButton>

        </div>        
      </ThemeProvider>
    )
}
export default App