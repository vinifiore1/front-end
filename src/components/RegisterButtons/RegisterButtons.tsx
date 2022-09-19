import { ButtonSecondary } from "../../components/ButtonSecondary/ButtonSecondary";
import { ButtonContainer } from "./styles";

interface IPropsRegisterButtons {
  active?: boolean;
  setActive?: (value: boolean) => void;
}

const RegisterButtons = (props: IPropsRegisterButtons) => {
  const handleRegisterPF = () => {
    props.setActive && props.setActive(true);
  };
  const handleRegisterPJ = () => {
    props.setActive && props.setActive(false);
  };

  return (
    <ButtonContainer>
      <ButtonSecondary
        onClick={() => handleRegisterPF()}
        disabled={!props.active}
        id="button-register-pf"
        label="Cliente"
      />

      <ButtonSecondary
        onClick={() => handleRegisterPJ()}
        disabled={props.active}
        id="button-register-pj"
        label="Profissional"
      />
    </ButtonContainer>
  );
};

export default RegisterButtons;
