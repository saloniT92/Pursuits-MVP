import React from 'react'; 
import { Link } from 'react-router-dom';  
const Header = () => { 
    return ( 
        <div className="App"> 
             <Link to="/" >  Home  </Link> 
             <Link to="/staffingPricing" >  Staffing And Pricing </Link> 
        </div> 
    ); 
}; 

export default Header