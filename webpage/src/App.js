import logo from './logo.svg';
import './App.css';
  
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo"
import Locations from "./pages/Locations/Locations"
import ContactUs from "./pages/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/whatwedo">
          <WhatWeDo/>
        </Route>
        <Route path="/locations" >
          <Locations/>
        </Route>
        <Route path="/contactus" >
          <ContactUs/>
        </Route>
        </Switch>
        <Footer/>
        </Router>

    </div>
  );
}

export default App;
