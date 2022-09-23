import { ReactNode } from "react";
import {
  ButtonRegisterIconContainer,
  ButtonRegisterContainer,
  ButtonRegisterLabelContainer,
} from "./styles";

interface IPropsButtonRegister {
  label: string;
  icon: ReactNode;
}

const ButtonRegister = (props: IPropsButtonRegister) => {
  return (
    <ButtonRegisterContainer>
      <ButtonRegisterIconContainer>{props.icon}</ButtonRegisterIconContainer>
      <ButtonRegisterLabelContainer>{props.label}</ButtonRegisterLabelContainer>
    </ButtonRegisterContainer>
  );
};

export default ButtonRegister;
