import { Button } from "../../../components/Button/Button";
import { FullPageNotAuth } from "../../../components/FullPageNotAuth/FullPageNotAuth";
import { Input } from "../../../components/Input/Input";
import RegisterButtons from "../../../components/RegisterButtons/RegisterButtons";
import { ContainerInputs, ContainerPassword } from "../styles/styles";
import { HiddePass } from "../../../img/HiddePass";
import { ShowPass } from "../../../img/ShowPass";
import { useState } from "react";
import { IRegisterClient } from "../styles/interface";
import { maskBornDate, maskCpf, maskPhone } from "../../../utils/mask";
import { connect } from "../../../api/connect";

interface IPropsRegisterPF {
  active?: boolean;
  setActive?: (value: boolean) => void;
}

const RegisterPF = (props: IPropsRegisterPF) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [userInfo, setUserInfo] = useState<IRegisterClient>();

  const handleCreateClient = async () => {
    const createClient = await connect("registro-cliente", userInfo);
  };

  return (
    <FullPageNotAuth>
      <ContainerInputs>
        <RegisterButtons setActive={props.setActive} active={props.active} />
        <Input
          id="input-name"
          label="Nome"
          placeholder="Nome"
          onChange={(e) => setUserInfo({ ...userInfo, nome: e.target.value })}
          value={userInfo?.nome}
          width="367px"
        />
        <Input
          id="input-cpf"
          label="Cpf"
          placeholder="000.000.000-00"
          width="367px"
          onChange={(e) => setUserInfo({ ...userInfo, cpf: e.target.value })}
          value={userInfo?.cpf ? maskCpf(userInfo?.cpf) : ""}
        />
        <Input
          id="input-date"
          label="Data de Nascimento"
          placeholder="00/00/0000"
          width="367px"
          type="text"
          onChange={(e) =>
            setUserInfo({ ...userInfo, dataNascimento: e.target.value })
          }
          value={
            userInfo?.dataNascimento
              ? maskBornDate(userInfo?.dataNascimento)
              : ""
          }
        />
        <Input
          id="input-phone"
          label="Telefone/Celular"
          placeholder="(00) 00000-0000"
          width="367px"
          onChange={(e) =>
            setUserInfo({ ...userInfo, telefone: e.target.value })
          }
          value={userInfo?.telefone ? maskPhone(userInfo?.telefone) : ""}
        />
      </ContainerInputs>
      <ContainerPassword>
        <Input
          id="input-passwrod"
          label="Senha"
          placeholder="***********"
          width="367px"
          type={showPass ? "text" : "password"}
          onChange={(e) => setUserInfo({ ...userInfo, senha: e.target.value })}
          value={userInfo?.senha}
          endAdornment={
            <span
              id="hidde-show-password"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <ShowPass /> : <HiddePass />}
            </span>
          }
        />
        <Input
          id="input-confrim-password"
          label="Confirmar senha"
          placeholder="***********"
          width="367px"
          type={showConfirmPass ? "text" : "password"}
          onChange={(e) =>
            setUserInfo({ ...userInfo, confirmSenha: e.target.value })
          }
          value={userInfo?.confirmSenha}
          endAdornment={
            <span
              id="hidde-show-password"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <ShowPass /> : <HiddePass />}
            </span>
          }
        />
      </ContainerPassword>

      <Button
        id="regiter-button-pf"
        label="Cadastrar"
        onClick={() => handleCreateClient()}
      />
    </FullPageNotAuth>
  );
};

export default RegisterPF;
