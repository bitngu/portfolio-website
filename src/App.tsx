import './index.css'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { Overlay } from './Views/Overlay'
import { AppRoutes } from './Router'
import { useEffect, useReducer } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export let forceUpdateTrigger = () => {};


function App() {
  const [,forceUpdate] = useReducer(x => x+1, 0);

  useEffect(() => {
    forceUpdateTrigger = () => {
      forceUpdate()
    }
  }, [])

  return (
    <BrowserRouter>
      <Overlay/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App

