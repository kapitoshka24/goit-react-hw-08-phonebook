import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

export default PrivateRoute;
