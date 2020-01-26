import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import "./App.css";
// import ClickCounter from "./Components/ClickCounter";
// import ToDo from "./Components/ToDo";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

import "bootstrap/scss/bootstrap.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todo">
              {/* <ToDo /> */}
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
