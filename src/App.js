import './App.css';
import Error404 from './Components/Error404';
import Goods from './Components/Goods';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Topteams from './Components/Topteams';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="*" element={<Error404 />} />
          <Route path="/goods" element={<Home />}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
