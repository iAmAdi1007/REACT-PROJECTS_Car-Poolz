import React from 'react';
import Header from './Header';
import Home from './Home';
import Axios from 'axios'




class Login extends React.Component {
    

    state = {
        username: "",
        password: "",
        message: "",
        textStyle: "",
        LOCAL_STORAGE_KEY : "username",
        isLogged:false
    }
    checkLogin = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.username === '' || this.state.password === '') {
            this.setState({ message: "All fields are mandatory", textStyle: "danger" })
        }
        
        Axios.post("http://localhost:5000/login", {
            userName: this.state.username,
            password: this.state.password
        }).then((response) => {
            if (response.data.status === 200) {
                //setLogin(true);
                alert("Logged In Successfully!Redirecting to Our Portal");
                localStorage.setItem(this.state.LOCAL_STORAGE_KEY, JSON.stringify(this.state.username));
                this.setState({
                    isLogged:true
                })

            }
            else {
                alert("Incorrect Credentials");

            }

        }, (err) => {
            console.log(err)
        })
        
        //this.props.checkLoginHandler(this.state);
    }

    setValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("inside Set Value")
        // console.log(e.target.value)
        // console.log(e.target.name)

    }
    render() {
        return (

            <>
                {this.state.isLogged ? <Home /> :
                    <div>
                        <Header />
                        <div className="container" style={{ width: "500px", border: "1px solid gray", borderRadius: "2%", padding: "15px", backgroundColor: "white", opacity: "0.9" }}>
                            <div className="container-fluid text-center">
                                <h3><strong>Login</strong></h3>
                            </div>
                            <form onSubmit={this.checkLogin}>
                                <div className="mb-3 form-group">
                                    <label className="form-label"><strong>Username
                            </strong></label>
                                    <input type="username"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder="Enter Username"
                                        onChange={this.setValue}
                                        value={this.state.username}

                                    />
                                </div>
                                <div className="mb-3 form-group">
                                    <label className="form-label"><strong>Password</strong></label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your Password"
                                        name="password"
                                        onChange={this.setValue}
                                        value={this.state.password}

                                    />
                                </div>
                                {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br />
                                <button type="submit" className="btn btn-outline-primary"><strong>Login</strong></button>
                            </form>
                        </div>
                    </div>}
            </>
        )
    }
}



export default Login



