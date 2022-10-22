import React from 'react';
import { Link } from 'react-router-dom';
import "../Components/Main.css";
const Navbar = () => {
    return ( 
        <div>
           
   
        <nav className="navbar navbar-light bg-black">
     
          <Link to="/" className='text-white removeline'>Home</Link>
          
        </nav>
        </div>
     );
}
 
export default Navbar;