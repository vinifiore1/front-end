import { useEffect, useState } from "react";
import { IconShowProfile } from "../../img/icones/IconShowProfile";
import {
  HeaderContainerMain,
  ProfileHeaderContainer,
  ProfileIconHeader,
  ProfileNameHeader,
  ProfilePictureHeader,
  TextProfilePicture,
  TitleContainer,
  TitleHeader,
} from "./styles";

export const Header = () => {
  const userInfo: any = JSON.parse(String(sessionStorage.getItem("user")));
  return (
    <HeaderContainerMain>
      <TitleContainer>
        <TitleHeader>FCA Agendamento</TitleHeader>
      </TitleContainer>
      <ProfileHeaderContainer>
        <ProfileNameHeader>{userInfo.nome}</ProfileNameHeader>
        <ProfilePictureHeader>
          <TextProfilePicture>{userInfo.nome[0]}</TextProfilePicture>
        </ProfilePictureHeader>
        <ProfileIconHeader>
          <IconShowProfile />
        </ProfileIconHeader>
      </ProfileHeaderContainer>
    </HeaderContainerMain>
  );
};
