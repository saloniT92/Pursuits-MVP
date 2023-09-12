import './App.css';
// import {Routes , Route } from "react-router-dom" 
// import StaffingPricing from './Components/staffingPricing';
// import Home from './Components/home';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes> 
            <Route path="/" element = component={<Home/> } /> 
            <Route path="/staffingPricing" component={<StaffingPricing/> } /> 
       </Routes>  */}
      
    </div>
  );
}

export default App;
