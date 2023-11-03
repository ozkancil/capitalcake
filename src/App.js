import logo from './logo.svg';
import './App.css';
import About from './capitalCake/about/about';
import { Route, Routes } from 'react-router-dom';
import Home from './capitalCake/home/home';
import NavBar from './capitalCake/navbar/navbar';
import FoodList from './capitalCake/food/foodlist';
import Soup from './capitalCake/food/soup';
import Bread from './capitalCake/food/bread';
//import '../src/style/app.scss';

function App() {
  return (
    <>
    <NavBar /> 
    <Routes >
    <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/food" element={<FoodList/>}>
      <Route path='/food/soup' element={<Soup/>}/>
      <Route path='/food/bread' element={<Bread/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
