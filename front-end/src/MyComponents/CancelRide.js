import React from 'react';
import Axios from'axios';
//import {Redirect, useHistory} from 'react-router-dom';



export default function CancelRide(props) {

    //const history= useHistory;

    const cancelRide =(e)=>{
        console.log("clicked");
        //setClick(true)
        Axios.post("http://localhost:5000/cancel_ride",{
            rideId:props.bookingId,
            rider:props.selectedRide[0].name
        })
        alert("Booking Cancelled!!");

    }
    return (
        <div className="container my-4" style={{ border: "1px solid lightgray" }}>
        <div className="container my-2">
            <h6 style={{ fontWeight: "bold", textAlign: "center", padding: "4px", backgroundColor: "#337ab7", marginBottom: "0", marginTop: "3px" }}>Booking Details</h6>
            <table className="table table-hover table-bordered">
                <thead style={{ fontWeight: "bolder" }}>
                    <tr>
                        <th scope="col"><h6><strong>Name</strong></h6></th>
                        <th scope="col"><h6><strong>Start Point</strong></h6></th>
                        <th scope="col"><h6><strong>End Point</strong></h6></th>
                        <th scope="col"><h6><strong>Car</strong></h6></th>
                        <th scope="col"><h6><strong>Seats Available</strong></h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ fontSize: "14px", fontWeight: "bold" }} >
                        <td data-title="name">{props.selectedRide[0].name}</td>
                        <td data-title="pickUp">{props.selectedRide[0].pickUp}</td>
                        <td data-title="destination">{props.selectedRide[0].destination}</td>
                        <td data-title="car">{props.selectedRide[0].car}</td>
                        <td data-title="seatsLeft">{props.selectedRide[0].seatsLeft - 1}</td>

                    </tr>

                </tbody>
            </table>
            <div className="container text-center">Your Booking ID is:{props.bookingId}</div>
            <button className="btn btn-danger btn-sm" onClick={cancelRide}>Cancel Ride!!</button>
        </div>
    </div>
    )
}
