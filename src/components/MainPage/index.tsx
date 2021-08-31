import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import { getUserName } from "../../store/user/selectors";
import { initWishlist } from "../../store/wishlist/reducer";
import { routes } from "../../utils/routes";
import ProtectedRoute from "../ProtectedRoute";
import AppHeader from "./AppHeader";
import { AppBody } from "./mainPageStyle";

const MainPage: FC = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  //restart wishlist from local storage when entering the app
  useEffect(() => {
    const localStorageUserName = localStorage.getItem("userName");
    if (localStorageUserName === userName) {
      const storageWishlist = localStorage.getItem("wishlist");
      if (storageWishlist) {
        dispatch(initWishlist(JSON.parse(storageWishlist)));
      }
    }
  }, [dispatch, userName]);

  return (
    <div>
      <AppHeader userName={userName} />
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
