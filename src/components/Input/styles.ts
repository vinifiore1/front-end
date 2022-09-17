import styled from "styled-components";

interface PropsAdminInput {
  value?: boolean;
  errorMessage?: boolean;
  disabled?: boolean;
  width?: string;
}

type PropsAdminInputOmitter = Omit<PropsAdminInput, "value">;

export const AdminLabelContainer = styled.label<PropsAdminInput>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-height: 100px;
  transition: 0.2s all;
  opacity: ${(props) => (props.disabled ? "0.6" : "")};
  max-width: ${(props) => (props.width ? props.width : "277px")};
`;

export const AdminSpanLabel = styled.span<PropsAdminInput>`
  color: #354f52;
  font-size: 16px;
  font-family: "Ubuntu";
  margin-bottom: 0px;
  cursor: text;
  opacity: 1;
  padding-left: 5px;
  margin-bottom: 8px;
`;

export const AdminInputMain = styled.input<PropsAdminInputOmitter>`
  border: none;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  background: transparent !important;
  font-size: 16px;
  padding-left: 5px;
  font-family: "Ubuntu";
  transition: 0.2s all;
  height: 51px;
  color: #808080;
  padding-right: 5px;
  &#new-password-confirm-label-error {
    border-bottom: 2px solid var(--red-1);
  }
  &:focus {
    outline: none;
  }
`;

export const AdminRequiredInput = styled.span``;

export const AdminLabelBold = styled.strong`
  font-family: "Ubuntu";
  color: #354f52;
`;

export const AdminSpanEndAdorment = styled.span`
  position: absolute;
  right: 5px;
  top: 45px;
  cursor: pointer;
`;

export const AdminSpanBottomAdorment = styled.span`
  position: absolute;
  top: 44px;
  width: 100%;
`;
