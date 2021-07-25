import React from 'react';
import Axios from 'axios';


const RideDetails = (props) => {


    const bookRide = () => {
        var ridee = JSON.parse(localStorage.getItem("username"));
        props.displayRidesHandler(false);
        //console.log(ridee);
        Axios.post("http://localhost:5000/book_ride", {
            ridee: ridee,
            rider: {
                name: props.selectedRide[0].name,
                pickUp: props.selectedRide[0].pickUp,
                destination: props.selectedRide[0].destination,
                car: props.selectedRide[0].car,
                seatsLeft: props.selectedRide[0].seatsLeft


            }

        }).then((response) => {
            //console.log(response);
            if (response.status === 200) {
                props.bookingDetailHandler(response.data.id);
            }
            else {
                console.log("Server Error");
            }
        }, (err) => {
            console.log(err);
        })

    }
    

    
    return (
        <>
        
        <div className="container my-4" style={{ border: "1px solid lightgray" }}>
            <div className="container my-2">
                <h6 style={{ fontWeight: "bold", textAlign: "center", padding: "4px", backgroundColor: "#337ab7", marginBottom: "0", marginTop: "3px" }}>Ride Details</h6>
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
                            <td data-title="seatsLeft">{props.selectedRide[0].seatsLeft}</td>

                        </tr>

                    </tbody>
                </table>
                <button className="btn btn-primary btn-sm" onClick={bookRide}>Book Now!!</button>
            </div>

        </div>
        
    </>
        
    )
}

export default RideDetails
