import styled from "styled-components";

interface IPropsIconHeader {
  showModal?: boolean;
}

export const HeaderContainerMain = styled.div`
  background: #52796f;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: center;
  height: 55px;
  border-right: 1px solid #efefef;
`;

export const TitleHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`;

export const ProfileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 82%;
  grid-gap: 15px;
  margin-right: 20px;
`;

export const ProfileNameHeader = styled.span`
  font-family: "Ubuntu";
  font-size: 16px;
  color: #ffffff;
`;

export const ProfilePictureHeader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 180px;
  background: #d9d9d9;
`;

export const ProfileIconHeader = styled.div<IPropsIconHeader>`
  cursor: pointer;
  transform: ${(props) => (props.showModal ? "rotate(180deg)" : "rotate(0)")};
  transition: all 0.7s;
`;

export const TextProfilePicture = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 23px;
  color: #ffffff;
  font-family: "Ubuntu";
`;

export const ContainerHeaderModal = styled.div<IPropsIconHeader>`
  background: #fff;
  box-shadow: 5px 5px 5px #ccc;
  position: absolute;
  width: 200px;
  height: 200px;
  left: 85%;
  top: 85px;
  border-radius: 17px;
  border: 1px solid #ccc;
  opacity: ${(props) => (props.showModal ? "1" : " 0")};
  transition: all 0.7s;
`;

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const TextUserNameModal = styled.span`
  font-family: "Ubuntu";
  display: flex;
  justify-content: center;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #52796f;
  border-bottom: 1px solid #ccc;
  margin: 20px;
  padding-bottom: 20px;
`;
