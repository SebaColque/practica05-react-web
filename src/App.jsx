import { ThemeProvider } from "./context/ThemeContext"
import Pagina from "./pages/Pagina"

function App() {
  return (
    <div className="App">
      < ThemeProvider>
        < Pagina />
      </ThemeProvider>
    </div>
  )
}

export default App
