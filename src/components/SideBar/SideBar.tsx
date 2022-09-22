import { AgendamentoIcon } from "../../img/AgendamentoIcon";
import { DashBoardIcon } from "../../img/DashBoardIcon";
import {
  IconContainer,
  SideBarContainer,
  SideBarContainerButton,
  SideBarContainerMain,
  TextContainer,
} from "./styles";

export const SideBar = () => {
  const routeLocalStorage = sessionStorage.getItem("page");
  const userRole = sessionStorage.getItem("role");
  const SideBar = [
    {
      id: "dashboard-sidebar",
      icon: <DashBoardIcon />,
      main: "DashBoard",
      route: "/home",
      role: ["ROLE_CLIENT", "ROLE_ADMIN"],
    },
    {
      id: "test-sidebar",
      icon: <AgendamentoIcon />,
      main: "Agendamento",
      route: "/agendamento",
      role: ["ROLE_CLIENT", "ROLE_ADMIN"],
    },
  ];
  const handleSetLocalStorageRoute = (item: any, route: string) => {
    sessionStorage.setItem("page", item.textContent);
    window.location.assign(route);
  };
  return (
    <SideBarContainer>
      <SideBarContainerMain>
        {SideBar.map((item, index) => {
          for (let i = 0; i < item.role.length; i++) {
            if (userRole === item.role[i]) {
              return (
                <SideBarContainerButton
                  key={index}
                  disabled={item.main === routeLocalStorage}
                  value={item.main}
                  onClick={(e) =>
                    handleSetLocalStorageRoute(e.target, item.route)
                  }
                >
                  <IconContainer>{item.icon}</IconContainer>
                  <TextContainer>{item.main}</TextContainer>
                </SideBarContainerButton>
              );
            }
          }
        })}
      </SideBarContainerMain>
    </SideBarContainer>
  );
};
