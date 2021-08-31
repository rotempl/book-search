import React, { FC } from "react";
import { Switch, Redirect } from "react-router-dom";
import { routes } from "../../utils/routes";
import ProtectedRoute from "../ProtectedRoute";
import AppHeader from "./AppHeader";
import { AppBody } from "./mainPageStyle";

const MainPage: FC = () => {
  return (
    <div>
      <AppHeader />
      <AppBody>
        <Switch>
          {Object.values(routes).map((route) => (
            <ProtectedRoute
              exact
              component={route.component}
              path={route.route}
              key={route.route}
            />
          ))}
          <Redirect to='/' />
        </Switch>
      </AppBody>
    </div>
  );
};

export default MainPage;
