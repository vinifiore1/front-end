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
      id: "test-sidebar",
      icon: <HiddePass />,
      main: "Agendamento",
    },
    {
      id: "test-sidebar",
      icon: <ShowPass />,
      main: "Serviços",
    },
  ];
  return (
    <SideBarContainer>
      <TextTitle>FCA Agendamento</TextTitle>
      <SideBarContainerMain>
        {SideBar.map((item, index) => {
          return (
            <SideBarContainerButton key={index}>
              <IconContainer>{item.icon}</IconContainer>
              <TextContainer>{item.main}</TextContainer>
            </SideBarContainerButton>
          );
        })}
      </SideBarContainerMain>
    </SideBarContainer>
  );
};
