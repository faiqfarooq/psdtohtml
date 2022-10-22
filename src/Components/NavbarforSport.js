import React from 'react';
import { Link } from 'react-router-dom';


const NavbarforSport = () => {
    return ( 
        <div>
             <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
      
       
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5" >
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/goods">Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/goods">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/goods">Sporting Goods</Link>
              </li>
             
            
            
            </ul>
           
          
        </div>
      </nav>





     
        </div>
     );
}
 
export default NavbarforSport;