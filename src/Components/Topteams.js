import React from 'react';
import img from "../img/team.png";
import "../Components/Main.css";
import { Link } from 'react-router-dom';
const Topteams = () => {
    return ( 
        <div>
 <div className="container py-3">
    <div className="Alintheheader ">
    <h2 >Top Teams</h2>
 <div className='theline'> </div>
    </div>
 
   
    <div className='row py-5'>
   
        <div className='col-1'></div>
        <div className='col-10 '>
        <div className="row gx-5 gy-4  ">
      
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px' ,height: '362px',boxShadow: '0px 0px 2px 0.2px #3e3e3e',borderRadius:'16px'}}>
        <img src={img} className="card-img-top pt-3" alt="team photo" />
        <div className="card-body">
        <h5 className="card-title text-center">Peshawar Zalmi</h5>
          <p className="card-text text-center">Game : <span style={{fontWeight: 'bold'}}>Circket</span> <br/> Location : <span style={{fontWeight: 'bold'}}>Lahore</span></p>
          <div className='DetailsButton mx-auto '> <Link to="/*" className="btn buttontext">Details</Link></div>
         
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px' ,height: '362px',boxShadow: '0px 0px 2px 0.2px #3e3e3e',borderRadius:'16px' }}>
        <img src={img} className="card-img-top pt-3" alt="team photo"/>
        <div className="card-body">
          <h5 className="card-title text-center">Peshawar Zalmi</h5>
          <p className="card-text text-center">Game : <span style={{fontWeight: 'bold'}}>Circket</span> <br/> Location : <span style={{fontWeight: 'bold'}}>Lahore</span></p>
          <div className='DetailsButton mx-auto '> <Link to="/*" className="btn buttontext">Details</Link></div>
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px' ,height: '362px' ,boxShadow: '0px 0px 2px 0.2px #3e3e3e',borderRadius:'16px' }}>
        <img src={img} className="card-img-top pt-3" alt="team photo" />
        <div className="card-body">
        <h5 className="card-title text-center">Peshawar Zalmi</h5>
        <p className="card-text text-center">Game : <span style={{fontWeight: 'bold'}}>Circket</span> <br/> Location : <span style={{fonimgtWeight: 'bold'}}>Lahore</span></p>
        <div className='DetailsButton mx-auto '> <Link to="/*" className="btn buttontext">Details</Link></div>
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px',height: '362px' ,boxShadow: '0px 0px 2px 0.2px #3e3e3e',borderRadius:'16px' }}>
        <img src={img }className="card-img-top pt-3" alt="team photo"/>
        <div className="card-body">
        <h5 className="card-title text-center">Peshawar Zalmi</h5>
        <p className="card-text text-center">Game : <span style={{fontWeight: 'bold'}}>Circket</span> <br/> Location : <span style={{fontWeight: 'bold'}}>Lahore</span></p>
        <div className='DetailsButton mx-auto '> <Link to="/*" className="btn buttontext">Details</Link></div>
        </div>
      </div>
          </div>
        </div>
        </div>
        <div className='col-1'>

        </div>
    </div>
      
      </div>
        </div>
     );
}
 
export default Topteams;