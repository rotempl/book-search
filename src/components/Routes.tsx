import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import WishlistPage from "./WishlistPage";

const Routes: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/search'>
          <SearchPage />
        </Route>
        <Route exact path='/wishlist'>
          <WishlistPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default Routes;
