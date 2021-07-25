import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Img1 from '../Images/Carousel_2.png';
import Img2 from '../Images/Carousel_3.png';
import Img3 from '../Images/Carousel_4.png';
import white from '../Images/white_back.png';
import Header from './Header'

const Home = () => {
    const [displayHeader, setDisplayHeader] = useState(false);

    useEffect(() => {
        var user = localStorage.getItem("username");
        if (user) {
            console.log(true);
            setDisplayHeader(true);
        }

    }, [])




    return (
        <>
            <Header isLogged={displayHeader} />
            <div style={{ backgroundImage: `url(${white})`, width: "1500px" }}>
                <div className="container-fluid" style={{ width: "1000px", marginBottom: "150px", float: "left" }}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Img1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Img2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Img3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="container-fluid" style={{ float: "right", width: "500px"}}>
                    <div className="container text-center" style={{ border: "1px solid lightgray", borderRadius: "3%",backgroundColor:'white' }}>
                        <h4 className="my-4" style={{ fontWeight: "bold", textDecoration: "underline" }}> WELCOME TO CARPOOLING PORTAL </h4>
                        <p>The concept behind CarPoolz is to reduce the number of cars on the streets which individuals use for commute to work places.<br /><b style={{ textDecoration: "underline" }}>If some of you are travelling to the same location why not travel together!!!</b> <br />
                        With CarPooz You can book a ride or offer a ride<br /><br />
                        </p>
                        <NavLink to="/show_rides" className="btn-get-started" style={{marginBottom:"10px"}}>Book/Offer your First Ride </NavLink>

                    </div>

                </div>
            </div>
        </>
    )

}

export default Home