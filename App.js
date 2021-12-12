import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Route } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/avengers" component={AvengerList} />
    <App />
  </Router>,
  document.getElementById("root")
);
