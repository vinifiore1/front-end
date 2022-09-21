import styled from "styled-components";

export const SideBarContainer = styled.div`
  background: #354f52;
  min-width: 250px;
  height: 100%;
`;

export const SideBarContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  grid-gap: 20px;
`;

export const SideBarContainerButton = styled.button`
  display: flex;
  grid-gap: 19px;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 3px;
  padding: 8px 57px 9px 10px;
  min-width: 210px;
  max-height: 37px;
`;

export const IconContainer = styled.div``;

export const TextContainer = styled.span`
  font-family: "Ubuntu";
  font-size: 16px;
  color: #ffffff;
`;

export const TextTitle = styled.div`
  margin-top: 45px;
  margin-bottom: 68px;
  font-family: "Ubuntu";
  font-size: 25px;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;
