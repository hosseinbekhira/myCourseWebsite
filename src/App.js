import React from "react";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Graphic from "./pages/Graphic";
import CCourse from "./pages/CCourse";
import Marketing from "./pages/Marketing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/frontend">
            <Frontend />
          </Route>
          <Route path="/graphic">
            <Graphic />
          </Route>
          <Route path="/ccourse">
            <CCourse />
          </Route>
          <Route path="/marketing">
            <Marketing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
