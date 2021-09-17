import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from './Components/Home'
// import Particles from './Components/Particles'
import Neon from './Components/Neon'
import Footer from './Components/Footer'

const App = () => {
  return (

// {/* <Router> */}
<>
<HashRouter basename="/">
        <div className='app'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            {/* <Route exact path='/particles' component={Particles}></Route> */}
            <Route exact path='/neon' component={Neon}></Route>

          </Switch>
          <Footer />
        </div>
      </HashRouter>
      {/* </Router> */}
   </>
  );
};

export default App;
