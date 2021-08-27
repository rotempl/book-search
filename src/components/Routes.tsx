import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import WishlistPage from "./WishlistPage";

const Routes: FC = () => {
  return (
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
  );
};

export default Routes;
