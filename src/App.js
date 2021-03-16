import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./Login";
import SignUp from "./SignUp"
//import Welcome from "./components/login/welcome";
import { AuthProvider } from "./services/auth";
import PrivateRoute from "./services/privateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;


//
//