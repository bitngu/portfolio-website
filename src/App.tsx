import { useState } from 'react'
import Navbar from './Views/Navbar'
import Footer from './Views/Footer'
import './index.css'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './Router'
import { Login } from './Views/Login'
import { Overlay } from './Views/Overlay'
function App() {

  const fakeData = () => {
    return Array.from({ length: 5 }, (_, i) => {
      return {
        path: `assets/fake/test${i}.png`
      }
    })
  }


  console.log(fakeData());


  return (
    <BrowserRouter>
      <Overlay/>
      <Login />
    </BrowserRouter>
  )
}

export default App


/**
 * TODO: Fix MediaViewer 
 * - Update css for modal view; how to handle when image is verticl view vs horizonta
 * 
 * - Maybe need a service to keep track of images? or actually, just pass it the index and when user click next or back; update it
 * - add different pics to test for items
 * - genie effect? maybe last thing to do?
 * - create work experience section
 * - create a project card/decide if need to do a full page for the project vs single page; setup react router if so
 * - come up with a theme
 * - Get pictures for sections
 * - finalize design
 */

/**
 * Instead of doing the mediaviwer, that should now be part of when the user clicks on the project page
 * and it'll show the "Gallery" of the items
 * 
 * 
 * 
 * // Links should be fore external links maybe? and github haave its own?
 */