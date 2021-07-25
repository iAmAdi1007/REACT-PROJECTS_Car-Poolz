import React from 'react';

const RideList = (props) =>{
    return(
        <tr  style={{ fontSize: "15px", fontWeight: "bold" }} onClick={()=>props.clickRideHandler(props.ride.id)}>
                                            <td data-title="pickUp">{props.ride.pickUp}</td>
                                            <td data-title="destination">{props.ride.destination}</td>
                                            <td data-title="seatsLeft">{props.ride.seatsLeft}</td>

                                        </tr>
    )
}

export default RideList;