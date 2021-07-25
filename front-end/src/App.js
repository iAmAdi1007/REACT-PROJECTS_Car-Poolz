import './App.css';
import Login from './MyComponents/login'
import { BrowserRouter,Route } from 'react-router-dom';
import Footer from '../src/MyComponents/Footer';
import ShowRides from './MyComponents/ShowRides'
import React from 'react';
import OfferRide from '../src/MyComponents/OfferRide';
//import InvalidPage from './MyComponents/InvalidPage';
import Protected from "./MyComponents/Protected";



function App() {

  
  //const [isLogged, setLogin] = useState(false);
  //const history= useHistory();

  const checkLoginHandler = (userDetails) => {
    
    console.log(userDetails);
    
    
  }
  // const ride = [
  //   {
  //     car: "Swift",
  //     destination: "Pumpwell",
  //     id: 0,
  //     name: "Krishna",
  //     pickUp: "MNG SEZ",
  //     seatsLeft: 2,
  //     __v: 0,
  //     _id: "60bcf415f82b8f6c847e4d24",

  //   },

  // ]


  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Route  exact path="/">
            <Protected component={()=><Login checkLoginHandler={checkLoginHandler}/>}/>
            </Route> 
          <Route exact path="/show_rides" component={()=><ShowRides />} />
          <Route exact path="/offer_ride" component={()=><OfferRide />}/>
          
          <Footer />
        </React.Fragment>
      </BrowserRouter> 
    </>
  );
}

export default App;
