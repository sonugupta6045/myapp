import Navbar from "./components/landingPage/Navbar";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     
     <BrowserRouter>
     <Routes>
        <Route path='/landing' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

