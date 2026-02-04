import './index.css'
import './App.css'
import {useNavigate} from 'react-router-dom'
import { Overlay } from './Views/Overlay'
import { AppRoutes } from './Router'
import { useEffect, useReducer } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export let forceUpdateTrigger = () => {};


function App() {
  const navigate = useNavigate();
  const [,forceUpdate] = useReducer(x => x+1, 0);

  useEffect(() => {
    forceUpdateTrigger = () => {
      forceUpdate()
    }

    const path = localStorage.getItem('path');

    if (path) {
      localStorage.removeItem('path');
      navigate(path);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Overlay/>
      <AppRoutes/>
    </>
  )
}

export default App

