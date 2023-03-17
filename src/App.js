import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navigationbar from './Components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
   <BrowserRouter>
   <Navigationbar/>
    <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/signup'} element={<Signup/>}/>
      <Route path={'/home'} element={<Home/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
