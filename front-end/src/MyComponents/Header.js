import React from 'react';
import CarPool from '../Images/CarPool.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {

    const logout =()=>{
        localStorage.clear();
    }


    

    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light" style={{fontFamily:"Poiret One, cursive"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Pool Carz &nbsp;   <img src={CarPool} alt="logo" style={{width:"10%", height:"10%", borderRadius:"50%"}}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {props.isLogged?<div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" onClick={logout}>Logout</NavLink>
                            </li>
                            
                        </ul>
                    </div>:""}
                </div>
            </nav>
            <div className="alert alert-dark text-center" role="alert">
                <strong >Friends Don't let Friends Ride Alone</strong>
            </div>
        </>





    )
}

export default Header;