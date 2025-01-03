import Navbar from "./components/landingPage/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

