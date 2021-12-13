import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/avengers" component={AvengerList} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
