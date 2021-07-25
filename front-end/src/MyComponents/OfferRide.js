import React from 'react';
import Axios from 'axios';
import Header from './Header'


class OfferRide extends React.Component {

    ;
    state = {
        name: "",
        car: "",
        seatsLeft: 0,
        pickUp: "",
        destination: "",
        isClicked: false,
        message: "",
        displayHeader:false
    }
    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    add = (e) => {
        this.setState({
            isClicked: true
        })
        Axios.post("http://localhost:5000/offer_ride",
            {
                name: this.state.name,
                car: this.state.car,
                seatsLeft: this.state.seatsLeft,
                pickUp: this.state.pickUp,
                destination: this.state.destination

            }).then((response) => {
                if (response.data.status === 200) {
                    this.setState({
                        message: "Added Successfully"
                    })
                }
                else {
                    this.setState({
                        message: "Failed to Add Data"
                    })

                }

            }, (err) => {
                console.log(err)
            });
        this.setState({
            name: "",
            car: "",
            seatsLeft: 0,
            pickUp: "",
            destination: "",
            message: ""
        })

    }

    componentDidMount=()=>{
        var user= localStorage.getItem("username");
        if(user){
            this.setState({
                displayHeader:true
            })
        }
    }

    render() {
        return (
            <>
                <Header isLogged={this.state.displayHeader} />
                <div className="container" style={{ width: "600px", border: "1px solid gray", borderRadius: "2%", padding: "10px", backgroundColor: "white", opacity: "0.99", marginBottom: "150px" }}>
                    <h3 style={{ backgroundColor: "#337ab7", width: "100%", borderRadius: "2%" }}><strong>Car Ride Registration Form</strong></h3>
                    <div className="mb-3 form-group">
                        <label className="form-label"><strong>Name</strong></label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={this.setValue} value={this.state.name} required />
                    </div>
                    <div className="mb-3 form-group">
                        <label className="form-label"><strong>Start Location</strong></label>
                        <input type="text" className="form-control" id="startLocation" placeholder="Start Loaction" name="pickUp" onChange={this.setValue} value={this.state.pickUp} required />
                    </div>
                    <div className="mb-3 form-group">
                        <label className="form-label"><strong>Destination</strong></label>
                        <input type="text" className="form-control" id="destination" placeholder="Destination" name="destination" onChange={this.setValue} value={this.state.destination} required />
                    </div>
                    <div className="mb-3 form-group">
                        <label className="form-label"><strong>Car</strong></label>
                        <input type="text" className="form-control" id="car" placeholder="Car" name="car" onChange={this.setValue} value={this.state.car} required />
                    </div>
                    <div className="mb-3 form-group">
                        <label className="form-label"><strong>Seats Available</strong></label>
                        <input type="number" className="form-control" id="seatsLeft" placeholder="Seats Available" name="seatsLeft" onChange={this.setValue} value={this.state.seatsLeft} required />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" onClick={this.add}><strong>Submit</strong></button>
                    {this.state.isClicked ? <div className="container text-center" style={{ color: "green" }}>
                        {this.state.message}

                    </div> : ""}

                </div>
            </>

        )
    }
}

export default OfferRide;
