import './index.css'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { Overlay } from './Views/Overlay'
import { AppRoutes } from './Router'
import { useEffect, useReducer } from 'react'
import { MediaPlayer } from './Views/MediaPlayer'
import { WindowsMediaPlayer } from './Views/WindowsMediaPlayer'


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
      {/* <MediaPlayer /> */}
      {/* <Window /> */}
      {/* <WindowsMediaPlayer /> */}
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App


/**
 * TODO:
 * Add homescreen, add 'applications', 
 * Maybe add a welcome screen after loading is done then login? Maybe also another page where they can choose admin or guest, if they admin, blue screen hehe
 * 
 * 
 */



// how to start adding active tabs?

// taskbar and desktop both share apps that can be open.
// maybe need a dataservice to keep track of the active apps
// ideally, when they click, it should set it to be selected.
// maybe desktop should keep a list of active apps.
// onclick, append to list of active apps.
// and from there render the items.
// need to create random IDs for them;


// on initial load we add the active app (if we want to)
// we do a map; generate a randomId, and store a taskbarItem:
// 1231: [{}]
// and during on click for the desktop app; we just do 2nd step and add to the data
// we define the onCLick(itemTask): void;
//probably need to add an additional param: isopen

// todo: fix draggability for windows object
// when dragging, they should be able to grab the window title bar that grabs an enitre window
// 


