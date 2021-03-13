import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navigation />

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
