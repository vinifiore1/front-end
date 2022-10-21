import { useState } from "react";
import { IconShowProfile } from "../../img/icones/IconShowProfile";

import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary";
import {
  ContainerHeaderModal,
  HeaderContainerMain,
  ModalMain,
  ProfileHeaderContainer,
  ProfileIconHeader,
  ProfileNameHeader,
  ProfilePictureHeader,
  TextProfilePicture,
  TextUserNameModal,
  TitleContainer,
  TitleHeader,
} from "./styles";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const userInfo: any = JSON.parse(String(sessionStorage.getItem("user")));

  const doLogout = () => {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("user", "");
    sessionStorage.setItem("role", "");
    sessionStorage.setItem("page", "");
    window.location.assign("/");
  };
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
        <ProfileIconHeader
          onClick={() => setShowModal(!showModal)}
          showModal={showModal}
        >
          <IconShowProfile />
        </ProfileIconHeader>
      </ProfileHeaderContainer>

      <ContainerHeaderModal showModal={showModal}>
        <ModalMain>
          <TextUserNameModal>{userInfo.nome}</TextUserNameModal>
          <ButtonSecondary id="button-header" label="Sair" onClick={doLogout} />
        </ModalMain>
      </ContainerHeaderModal>
    </HeaderContainerMain>
  );
};
