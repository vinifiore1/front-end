import { AgendamentoIcon } from "../../img/AgendamentoIcon";
import { DashBoardIcon } from "../../img/DashBoardIcon";
import { HiddePass } from "../../img/HiddePass";
import { ShowPass } from "../../img/ShowPass";
import {
  IconContainer,
  SideBarContainer,
  SideBarContainerButton,
  SideBarContainerMain,
  TextContainer,
  TextTitle,
} from "./styles";

export const SideBar = () => {
  const SideBar = [
    {
      id: "dashboard-sidebar",
      icon: <DashBoardIcon />,
      main: "DashBoard",
      route: "/home",
    },
    {
      id: "test-sidebar",
      icon: <AgendamentoIcon />,
      main: "Agendamento",
      route: "/agendamento",
    },
  ];
  const handleSetLocalStorageRoute = (item: any, route: string) => {
    localStorage.setItem("page", item.textContent);
    window.location.assign(route);
  };

  const routeLocalStorage = localStorage.getItem("page");

  return (
    <SideBarContainer>
      <SideBarContainerMain>
        {SideBar.map((item, index) => {
          return (
            <SideBarContainerButton
              key={index}
              disabled={item.main === routeLocalStorage}
              value={item.main}
              onClick={(e) => handleSetLocalStorageRoute(e.target, item.route)}
            >
              <IconContainer>{item.icon}</IconContainer>
              <TextContainer>{item.main}</TextContainer>
            </SideBarContainerButton>
          );
        })}
      </SideBarContainerMain>
    </SideBarContainer>
  );
};
