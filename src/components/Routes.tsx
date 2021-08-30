import React, { FC, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../components/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { userNameKey } from "../utils/variables";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/reducer";
import MainPage from "./MainPage";

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
      <ProtectedRoute path='/app'>
        <MainPage />
      </ProtectedRoute>
      <Redirect to='/' />
    </Switch>
  );
};

export default Routes;
