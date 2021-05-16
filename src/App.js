import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import  favorite from "./pages/favorite";
import about from "./pages/about";
import Welcome from "./components/login/welcome";
import { AuthProvider } from "./services/auth";
import PrivateRoute from "./services/privateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          
          <PrivateRoute exact path="/HomePage" component={HomePage} />
          <PrivateRoute exact path="/about" component={about} />
          <PrivateRoute exact path="/favorite" component={favorite} />
          <Route path="/" component ={Welcome}></Route>
          
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;


//
//