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
import Main from "./components/main/Main";
import Section from "./components/section/Section";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Main />
          <Header />
        </Route>
      </Switch>
      <Router>
        <Section />
        <Carrusel />
        <CarruselLoMejor />
      </Router>
    </Router>
  );
}

export default App;
