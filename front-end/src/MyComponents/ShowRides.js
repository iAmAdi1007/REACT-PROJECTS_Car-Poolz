import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import RideList from './RideList';
import RideDetails from './RideDetails'
import CancelRide from './CancelRide';


const ShowRides = (props) => {
    const [rideDetails, setRideDetails] = useState([]);
    const [isClicked, setClick] = useState(false);
    const [isRideSelected, setRideSelected] = useState(false);
    const [selectedRide, setSelectedRide] = useState([]);
    const [dispDetails, setdispDetails] = useState(true);
    const [bookingId, setbookingId] = useState(0);
    const [displayHeader, setDisplayHeader]= useState(false);

    const showRideDetails = () => {
        setClick(true);
        //console.log(rideDetails);
    }
    useEffect(() => {
        Axios.get("http://localhost:5000/show_rides").then(
            (res) => {
                setRideDetails(res.data);
                //console.log(rideDetails);   

            })
        var user= localStorage.getItem("username");
        if(user){
            console.log(true);
            setDisplayHeader(true);
        }

    }, [])

    var newRideDetails = null;
    const displayDetails = (id) => {
        newRideDetails = rideDetails.filter((ride) => {
            return ride.id === id;
        });
        setRideSelected(true);
        setSelectedRide(newRideDetails);
        //console.log(newRideDetails);
    };

    const displayRidesHandler = (data) => {
        setdispDetails(data);
        console.log(data);
    }

    const bookingDetailHandler = (res) => {
        setbookingId(res);

    }







    return (
        <>
            <Header isLogged={displayHeader} />

            <div id="main" className="container text-center mx-4 " style={{ width: "700px", border: "1px solid gray", borderRadius: "2%", padding: "15px", backgroundColor: "white", float: "left", opacity: "0.99", marginBottom: "150px" }}>
                <div className="container-fluid">
                    <h4 className="text-center"><strong>Book A Ride</strong></h4>

                    <p className="container-fluid text-center my-2"><strong>
                        Pool Carz is an online application which enables user to share rides with others. You can either book a ride or
                        offer a ride. Did we mention that this app is advertisement free? To add on top of that its free of cost!
                So what are you waiting for ? Check out the rides available and start PCing!!</strong>
                    </p>
                </div>
                {!isClicked ?
                    <div className="container">
                        <button className="btn btn-primary my-3" style={{ width: "30%" }} onClick={showRideDetails}>Show All Rides</button><br />
                        <NavLink to="/offer_ride">
                            <button className="btn btn-primary" style={{ width: "30%" }}>Offer a Ride!</button>
                        </NavLink>
                    </div> :
                    <div className="container-fluid">
                        {!isRideSelected ? <p className="text-primary" style={{ fontSize: "16px" }}><strong>Please Select a Ride!!</strong></p> : ""}
                        <div className="container-fluid my-2">
                            <button className="btn btn-primary mx-1 active" style={{ width: "23%" }} >Show All Rides</button>
                            <button className="btn btn-primary mx-1" style={{ width: "20%" }}>To Infosys</button>
                            <button className="btn btn-primary mx-1" style={{ width: "20%" }}>From Infosys</button>
                            <button className="btn btn-primary mx-1" style={{ width: "20%" }}>Others</button>
                        </div>
                        {dispDetails ? <div className="table-responsive">
                            <table className="table table-hover table-bordered my-3">
                                <thead style={{ backgroundColor: "#337ab7" }}>
                                    <tr>
                                        <th scope="col"><h4><strong>Start Point</strong></h4></th>
                                        <th scope="col"><h4><strong>End Point</strong></h4></th>
                                        <th scope="col"><h4><strong>Seats Available</strong></h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rideDetails.map((ride) => {
                                        //console.log(ride);
                                        return (
                                            <RideList ride={ride} clickRideHandler={displayDetails} key={ride.id} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div> : ""}
                        <div className="container">
                            {(isRideSelected && dispDetails) ? <RideDetails selectedRide={selectedRide} displayRidesHandler={displayRidesHandler} bookingDetailHandler={bookingDetailHandler} /> : ""}
                            {!dispDetails ? <CancelRide selectedRide={selectedRide} bookingId={bookingId} /> : ""}
                            <NavLink to='/offer_ride'>
                                <button className="btn btn-primary">Offer a Ride</button>
                            </NavLink>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ShowRides;
