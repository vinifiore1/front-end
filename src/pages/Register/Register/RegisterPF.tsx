import { Button } from "../../../components/Button/Button";
import { FullPageNotAuth } from "../../../components/FullPageNotAuth/FullPageNotAuth";
import { Input } from "../../../components/Input/Input";
import RegisterButtons from "../../../components/RegisterButtons/RegisterButtons";
import { ContainerInputs, ContainerPassword } from "../styles/styles";
import { HiddePass } from "../../../img/HiddePass";
import { ShowPass } from "../../../img/ShowPass";
import { useState } from "react";
import { IErrorsClient, IRegisterClient } from "../interface";
import { maskBornDate, maskCpf, maskPhone } from "../../../utils/mask";
import { connect } from "../../../api/connect";
import { cpf } from "cpf-cnpj-validator";

interface IPropsRegisterPF {
  active?: boolean;
  setActive?: (value: boolean) => void;
}

const RegisterPF = (props: IPropsRegisterPF) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [userInfo, setUserInfo] = useState<IRegisterClient>({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrorsClient>({});

  const handleCreateClient = async () => {
    const errors = errorsTest();
    if (errors) {
      setErrors(errors);
    } else {
      setLoading(true);
      const createClient = await connect("registro-cliente", "post", userInfo);
      if (createClient.code === "ERR_BAD_RESPONSE") {
        setLoading(false);
      } else {
        sessionStorage.setItem("username", userInfo?.cpf ? userInfo.cpf : "");
        sessionStorage.setItem(
          "password",
          userInfo?.senha ? userInfo.senha : ""
        );
        setLoading(false);
        window.location.assign("/register-success");
      }
    }
  };

  const handleTestValidation = (item: any) => {
    if (item.id === "input-cpf") {
      const cpfIsValid = cpf.isValid(item.value);
      if (!cpfIsValid) {
        setErrors({ ...errors, cpfMessage: "CPF inválido!", cpf: true });
      } else {
        setErrors({ ...errors, cpf: false });
      }
    }
    if (item.id === "input-confrim-password") {
      const senhaIsValid = userInfo.senha === userInfo.confirmSenha;
      if (!senhaIsValid) {
        setErrors({
          ...errors,
          confirmSenhaMessage: "As senhas não são compatíveis!",
          confirmSenha: true,
        });
      }
    }
  };

  const errorsTest = () => {
    const error: IErrorsClient = {};
    if (!userInfo?.nome) {
      error.nome = true;
    } else error.nome = false;
    if (!userInfo.cpf) {
      error.cpf = true;
    } else error.cpf = false;
    if (!userInfo.dataNascimento) {
      error.dataNascimento = true;
    } else error.dataNascimento = false;
    if (!userInfo.telefone) {
      error.telefone = true;
    } else error.telefone = false;
    if (!userInfo.senha) {
      error.senha = true;
    } else error.senha = false;
    if (!userInfo.confirmSenha) {
      error.confirmSenha = true;
    } else error.confirmSenha = false;
    return error;
  };

  return (
    <FullPageNotAuth loading={loading}>
      <ContainerInputs>
        <RegisterButtons setActive={props.setActive} active={props.active} />
        <Input
          id="input-name"
          label="Nome"
          placeholder="Nome"
          onChange={(e) => setUserInfo({ ...userInfo, nome: e.target.value })}
          value={userInfo.nome}
          width="367px"
          error={errors.nome}
        />
        <Input
          id="input-cpf"
          label="CPF"
          placeholder="000.000.000-00"
          width="367px"
          onBlur={(e) => handleTestValidation(e.target)}
          onChange={(e) => setUserInfo({ ...userInfo, cpf: e.target.value })}
          value={userInfo.cpf ? maskCpf(userInfo?.cpf) : ""}
          error={errors.cpf}
          erroMessage={errors.cpfMessage}
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
            userInfo.dataNascimento ? maskBornDate(userInfo.dataNascimento) : ""
          }
          error={errors.dataNascimento}
        />
        <Input
          id="input-phone"
          label="Telefone/Celular"
          placeholder="(00) 00000-0000"
          width="367px"
          onChange={(e) =>
            setUserInfo({ ...userInfo, telefone: e.target.value })
          }
          value={userInfo.telefone ? maskPhone(userInfo.telefone) : ""}
          error={errors.telefone}
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
          value={userInfo.senha}
          endAdornment={
            <span
              id="hidde-show-password"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <ShowPass /> : <HiddePass />}
            </span>
          }
          error={errors.senha}
        />
        <Input
          id="input-confrim-password"
          label="Confirmar senha"
          placeholder="***********"
          width="367px"
          type={showConfirmPass ? "text" : "password"}
          onBlur={(e) => handleTestValidation(e.target)}
          onChange={(e) =>
            setUserInfo({ ...userInfo, confirmSenha: e.target.value })
          }
          value={userInfo.confirmSenha}
          endAdornment={
            <span
              id="hidde-show-password"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <ShowPass /> : <HiddePass />}
            </span>
          }
          error={errors.confirmSenha}
          erroMessage={errors.confirmSenhaMessage}
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
