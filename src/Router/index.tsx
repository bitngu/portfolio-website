import {Routes, Route} from 'react-router-dom'
import {Portfolio} from '../Views/Portfolio';
import {PortfolioItem} from '../Components/PortfolioItem'
import { Experiences } from '../Views/Experiences';
import { Landing } from '../Views/Landing';


export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path="/experiences" element={<Experiences/>}/>
    <Route path="/portfolio" element={<Portfolio/>} /> 
    <Route path='/portfolio/:id' element={<PortfolioItem/>} />
  </Routes>
);