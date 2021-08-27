import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utils/routes";
import HomePage from "../components/HomePage";
import ProtectedRoute from "./ProtectedRoute";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      {Object.values(routes).map((route) => (
        <ProtectedRoute exact component={route.component} path={route.route} key={route.route} />
      ))}
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
