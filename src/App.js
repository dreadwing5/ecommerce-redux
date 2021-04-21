import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navigation from "./components/Layout/Navigation";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import Home from "./components/Layout/Home";
import Category from "./components/Layout/Category";
import Calendar from "./components/Calendar"

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    //   // // log user out from all tabs if they log out in one tab
    //   // window.addEventListener("storage", () => {
    //   //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    //   // });
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/category" component={Category} />
            <Route path="/calendar" component={Calendar} />

          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
