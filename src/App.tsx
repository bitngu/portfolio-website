import './index.css'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { Overlay } from './Views/Overlay'
import { AppRoutes } from './Router'
function App() {
  return (
    <BrowserRouter>
      <Overlay/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App


/**
 * TODO:
 * Maybe add a welcome screen after loading is done then login? Maybe also another page where they can choose admin or guest, if they admin, blue screen hehe
 * 
 * 
 */