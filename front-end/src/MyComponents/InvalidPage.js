import React from 'react';
import { Redirect } from 'react-router';

import banner_error_404 from '../Images/banner_error_404.png';



export default function InvalidPage() {
    return (
        <>
        <h1 className="text-center">INVALID PAGE!!</h1>
        <div className="container" style={{backgroundImage:banner_error_404, margin:"20px", width:"700px"}}>
            
            <Redirect to="/"/>
            

        </div>
        </>
    )
}


