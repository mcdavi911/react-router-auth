import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HOME_URL, LOGIN_URL, DASHBOARD_URL } from "./urls";

import Homepage from "./Homepage";
import Login from "./Login";
import Dashboard from "./Dashboard";


// Simulated authentication obj, maybe this would be retrieved in cookies
export const fakeAuth = {
  signedIn: false
};

const RequireAuth = ({ children }) => {
  console.log(children);
  
  if (!fakeAuth.signedIn) {
    return <Redirect to={LOGIN_URL} />;
  }

  return children;
};

const AppRouter = () => (
  <Switch>
    <Route exact path={HOME_URL} component={Homepage} />
    <Route exact path={LOGIN_URL} component={Login} />
    {/* TODO: Require login */}
    <RequireAuth>
      <Route exact path={DASHBOARD_URL} component={Dashboard} />
    </RequireAuth>
  </Switch>
);

export default AppRouter;