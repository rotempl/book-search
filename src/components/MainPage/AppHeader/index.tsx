import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../../utils/routes";
import { NavigationButton, HeaderContainer } from "./appHeaderStyle";

interface AppHeaderProps {
  userName: string;
}
const AppHeader: FC<AppHeaderProps> = (props) => {
  const { userName } = props;
  const history = useHistory();

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
            key={key}
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
