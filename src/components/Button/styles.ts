import styled from "styled-components";

interface IAdminButtonProps {
  type?: string;
  disabled?: boolean;
}

export const AdminButtonContainer = styled.div<IAdminButtonProps>`
  color: var(--white);
  background: ${(props) => (props.disabled ? "#C4C4C4" : "#52796F")};
  border: none;
  * {
    fill: var(--white) !important;
  }
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;
  width: 367px;
  height: 56px;
  left: 601px;
  box-sizing: border-box;
  border-radius: 3px;
  transition: 0.2s all;
  text-decoration: none !important;
  &:hover {
    transform: ${(props) => (props.disabled ? "scale(1)" : "scale(1.015)")};
    text-decoration: none !important;
    outline: none !important;
    background-color: ${(props) => (props.disabled ? "" : "#264940")};
  }
  @media (max-width: 1380px) {
    padding: 0 35px;
  }
`;

export const AdminButtonIconContainer = styled.span`
  margin-right: 20px;
`;

export const AdminButtonLabel = styled.span`
  font-size: 24px;
  font-family: "Ubuntu";
  display: flex;
  gap: 6px;
`;

export const AdminButtonLabelBold = styled.span`
  font-family: "Ubuntu";
  display: inline-flex;
  width: max-content;
`;

export const AdminLabelBold = styled.strong`
  font-family: "Ubuntu";
  font-size: 24px;
`;
