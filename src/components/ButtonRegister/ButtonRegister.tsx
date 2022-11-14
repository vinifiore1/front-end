import { ReactNode } from "react";
import {
  ButtonRegisterIconContainer,
  ButtonRegisterContainer,
  ButtonRegisterLabelContainer,
} from "./styles";

interface IPropsButtonRegister {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

const ButtonRegister = (props: IPropsButtonRegister) => {
  return (
    <ButtonRegisterContainer onClick={props.onClick}>
      <ButtonRegisterIconContainer>{props.icon}</ButtonRegisterIconContainer>
      <ButtonRegisterLabelContainer>{props.label}</ButtonRegisterLabelContainer>
    </ButtonRegisterContainer>
  );
};

export default ButtonRegister;
