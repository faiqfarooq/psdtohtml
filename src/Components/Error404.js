import React from 'react';
import "../Components/Main.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Error404 = () => {
    return ( 
        <>
<Navbar/>
        <h1 className=' erro py-5 mt-5  text-center'>404 </h1>
        <h2 className='erro text-center '>Page Not Found</h2>
        <p className='text-center pt-3'>Return to the home or visit my portfolio</p>
        <Link to="/" > <p className='text-center pt-5 '>Return to Home</p> </Link>
        <a href="https://www.faiqfarooq.live/" className=' text-danger link'> <p className='text-center py-2'>Visit my Portfolio</p> </a>
        <div className='pt-5 '><img src="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1529481003382607872" alt="" className='centerimg' /> <h5 className='text-center '>Thanks Tecaudex </h5></div>
       
        </>
    );
}
 
export default Error404;