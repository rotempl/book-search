import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { userNameKey } from "../utils/variables";

const ProtectedRoute: FC<any> = ({ component: Component, ...rest }) => {
  const isValidateUser = localStorage.getItem(userNameKey);
  return (
    <Route
      {...rest}
      render={(props) => (isValidateUser ? <Component {...props} /> : <Redirect to='/' />)}
    />
  );
};

export default ProtectedRoute;
