import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserName } from "../../../store/user/selectors";
import { routes } from "../../../utils/routes";
import { NavigationButton, HeaderContainer } from "./appHeaderStyle";

const AppHeader: FC = () => {
  const history = useHistory();
  const userName = useSelector(getUserName);

  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(window.location.pathname);
  }, []);

  const onNavigationButtonClick = (route: string) => {
    setActiveRoute(route);
    history.push(route);
  };

  return (
    <HeaderContainer>
      <div>Hello {userName}</div>
      <div>
        {Object.entries(routes).map(([key, value]) => (
          <NavigationButton
            isActive={activeRoute === value.route}
            onClick={() => onNavigationButtonClick(value.route)}
            disabled={activeRoute === value.route}
          >
            {key}
          </NavigationButton>
        ))}
      </div>
    </HeaderContainer>
  );
};

export default AppHeader;
