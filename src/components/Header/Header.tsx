import { IconShowProfile } from "../../img/icones/IconShowProfile";
import {
  HeaderContainerMain,
  ProfileHeaderContainer,
  ProfileIconHeader,
  ProfileNameHeader,
  ProfilePictureHeader,
  TitleContainer,
  TitleHeader,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainerMain>
      <TitleContainer>
        <TitleHeader>FCA Agendamento</TitleHeader>
      </TitleContainer>
      <ProfileHeaderContainer>
        <ProfileNameHeader>Jessé Brisola de Araujo</ProfileNameHeader>
        <ProfilePictureHeader></ProfilePictureHeader>
        <ProfileIconHeader>
          <IconShowProfile />
        </ProfileIconHeader>
      </ProfileHeaderContainer>
    </HeaderContainerMain>
  );
};
