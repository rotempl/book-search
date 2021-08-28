import React, { FC, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../utils/routes";
import HomePage from "../components/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { userNameKey } from "../utils/variables";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/reducer";

const Routes: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userName = localStorage.getItem(userNameKey);
    if (typeof userName === "string") {
      dispatch(setUser(userName));
    }
  }, [dispatch]);

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
