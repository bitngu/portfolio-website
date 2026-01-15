import {Routes, Route} from 'react-router-dom'
import { Landing } from '../Views/Landing';
import { Desktop } from '../Views/Desktop';

export const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/desktop' element={<Desktop/>}/>
  </Routes>
);