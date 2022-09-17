import styled from "styled-components";

interface IAdminButtonProps {
  type?: string;
  disabled?: boolean;
}

export const AdminButtonContainer = styled.div<IAdminButtonProps>`
  color: var(--white);
  background: ${(props) => (props.disabled ? "#C4C4C4" : "#8AC926")};
  border: none;
  * {
    fill: var(--white) !important;
  }
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 166px;
  height: 40px;
  left: 601px;
  box-sizing: border-box;
  border-radius: 3px;
  transition: 0.2s all;
  text-decoration: none !important;
  &:hover {
    transform: ${(props) => (props.disabled ? "scale(1)" : "scale(1.015)")};
    text-decoration: none !important;
    outline: none !important;
  }
`;

export const AdminButtonIconContainer = styled.span`
  margin-right: 20px;
`;

export const AdminButtonLabel = styled.span`
  font-size: 20px;
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
`;
