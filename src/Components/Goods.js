import React from 'react';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import "../Components/Main.css";
import { Link } from 'react-router-dom';
import NavbarforSport from './NavbarforSport';

const Goods = () => {
    return ( 
        <div>
 <div className="container py-5">
    <div className="Alintheheader1 ">
    <h2 >Sportsware & Goods</h2>
 <div className='theline1'> </div>
    </div>
 <NavbarforSport/>
   
    <div className='row py-5'>
   
        <div className='col-1'></div>
        <div className='col-10 '>
        <div className="row gx-5 gy-4  ">
      
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px',backgroundColor:'#EFEFEF' ,height: '316px',boxShadow: '0px 0px 2px 0.2px #cacbcc',borderRadius:'16px'}}>
        <img src={img4} className="card-img-top pt-3" alt="team photo" style={{width:'214.77px',height:'232px'}} />
        <div className="card-body">
          
         <div>
            <div className='row'>
                <div className='col my-auto'>Shoes</div>
                <div className='col ms-5 ps-5'><Link to="/*" className='Blackcolor'>
                <div class="card "style={{width:'48px',height:'44px'}} >

  <div class="setarrow mx-auto my-auto">
    
  <i style={{fontSize: '24px'}} className="fas">&#xf061;</i>
  </div>
</div>
                    
                    
</Link> </div>
            </div>
         </div>
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px',backgroundColor:'#EFEFEF' ,height: '316px',boxShadow: '0px 0px 2px 0.2px #cacbcc',borderRadius:'16px' }}>
        <img src={img3} className="card-img-top pt-3" alt="team photo" style={{width:'214.77px',height:'232px'}}/>
        <div className="card-body">
        <div>
            <div className='row ' >
                <div className='col my-auto'>T-Shirt</div>
                <div className='col ms-5 ps-5'><Link to="/*" className='Blackcolor'>
                <div class="card "style={{width:'48px',height:'44px'}} >

  <div class="setarrow mx-auto my-auto">
    
  <i style={{fontSize: '24px'}} className="fas">&#xf061;</i>
  </div>
</div>
                    
                    
</Link></div>
            </div>
         </div>
          
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px',backgroundColor:'#EFEFEF' ,height: '316px' ,boxShadow: '0px 0px 2px 0.2px #cacbcc',borderRadius:'16px' }}>
        <img src={img2} className="card-img-top pt-3" alt="team photo" style={{width:'214.77px',height:'232px'}}/>
        <div className="card-body">
       
        <div>
            <div className='row'>
                <div className='col my-auto'>Shirt</div>
                <div className='col ms-5 ps-5'><Link to="/*" className='Blackcolor'>
                <div class="card "style={{width:'48px',height:'44px'}} >

  <div class="setarrow mx-auto my-auto">
    
  <i style={{fontSize: '24px'}} className="fas">&#xf061;</i>
  </div>
</div>
                    
                    
</Link>  </div>
            </div>
         </div>
        </div>
      </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
          <div className="card" style={{width: '247px',backgroundColor:'#EFEFEF',height: '316px' ,boxShadow: '0px 0px 2px 0.2px #cacbcc',borderRadius:'16px' }}>
        <img src={img1 }className="card-img-top pt-3" alt="team photo" style={{width:'214.77px',height:'232px'}}/>
        <div className="card-body">
        <div>
            <div className='row'>
                <div className='col my-auto'>Cap</div>
                <div className='col ms-5 ps-5'><Link to="/*" className='Blackcolor'>
                <div class="card "style={{width:'48px',height:'44px'}} >

  <div class="setarrow mx-auto my-auto">
    
  <i style={{fontSize: '24px'}} className="fas">&#xf061;</i>
  </div>
</div>
                    
                    
</Link>  </div>
            </div>
         </div>
        
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
 
export default Goods;