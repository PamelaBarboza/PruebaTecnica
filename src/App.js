import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CarruselLoMejor from "./components/carruselLoMejor/CarruselLoMejor";
import Carrusel from "./components/carrusel/Carrusel";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/NavBar";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Header />
            <Carrusel />
            <CarruselLoMejor />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
