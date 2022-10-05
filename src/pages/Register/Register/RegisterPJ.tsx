import { Button } from "../../../components/Button/Button";
import { FullPageNotAuth } from "../../../components/FullPageNotAuth/FullPageNotAuth";
import { Input } from "../../../components/Input/Input";
import RegisterButtons from "../../../components/RegisterButtons/RegisterButtons";
import {
  ContainerButtons,
  ContainerInputs,
  ContainerPassword,
  ContainerRegisterPJ,
} from "../styles/styles";
import { HiddePass } from "../../../img/icones/HiddePass";
import { ShowPass } from "../../../img/icones/ShowPass";
import { useState } from "react";
import { IErrorsClient, IRegisterClient } from "../interface";
import { maskBornDate, maskCpf, maskPhone } from "../../../utils/mask";
import { connect } from "../../../api/connect";
import { cpf } from "cpf-cnpj-validator";
import { ButtonSecondary } from "../../../components/ButtonSecondary/ButtonSecondary";
import { Link } from "react-router-dom";

interface IPropsRegisterPJ {
  active?: boolean;
  setActive?: (value: boolean) => void;
}

const RegisterPJ = (props: IPropsRegisterPJ) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [userInfo, setUserInfo] = useState<IRegisterClient>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<IErrorsClient>({});

  const handleCreateEmploye = async () => {
    const errors = errorsTest();
    if (
      errors.confirmSenha ||
      errors.cpf ||
      errors.dataNascimento ||
      errors.email ||
      errors.nome ||
      errors.pix ||
      errors.senha ||
      errors.telefone
    ) {
      setErrors(errors);
    } else {
      setLoading(true);
      const createEmploye = await connect(
        "registro-funcionario",
        "post",
        userInfo
      );
      if (createEmploye.code === "ERR_BAD_RESPONSE") {
        setLoading(false);
      } else {
        setLoading(false);
        sessionStorage.setItem("username", userInfo?.cpf ? userInfo.cpf : "");
        sessionStorage.setItem(
          "password",
          userInfo?.senha ? userInfo.senha : ""
        );
        window.location.assign("/register-success");
      }
    }
  };

  const errorsTest = () => {
    const error: IErrorsClient = {};
    if (!userInfo?.nome) {
      error.nome = true;
    } else error.nome = false;
    if (!userInfo?.cpf) {
      error.cpf = true;
    } else {
      const cpfIsValid = cpf.isValid(userInfo.cpf);
      if (!cpfIsValid) {
        error.cpf = true;
        error.cpfMessage = "CPF inválido!";
      } else {
        error.cpf = false;
      }
    }
    if (!userInfo?.email) {
      error.email = true;
    } else {
      if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
        error.email = true;
        error.emailMessage = "E-mail inválido";
      } else {
        error.email = false;
      }
    }
    if (!userInfo?.dataNascimento) {
      error.dataNascimento = true;
    } else error.dataNascimento = false;
    if (!userInfo?.telefone) {
      error.telefone = true;
    } else error.telefone = false;
    if (!userInfo?.senha) {
      error.senha = true;
    } else error.senha = false;
    if (!userInfo?.confirmSenha) {
      error.confirmSenha = true;
    } else error.confirmSenha = false;
    if (!userInfo?.pix) {
      error.pix = true;
    } else error.pix = false;
    return error;
  };

  const handleTestValidation = (item: any) => {
    if (item.id === "input-cpf" && item.value) {
      const cpfIsValid = cpf.isValid(item.value);
      if (!cpfIsValid) {
        setErrors({ ...errors, cpfMessage: "CPF inválido!", cpf: true });
      } else {
        setErrors({ ...errors, cpf: false });
      }
    }
    if (item.id === "input-confrim-password") {
      const senhaIsValid = userInfo?.senha === userInfo?.confirmSenha;
      if (!senhaIsValid) {
        setErrors({
          ...errors,
          confirmSenhaMessage: "As senhas não são compatíveis!",
          confirmSenha: true,
        });
      } else {
        setErrors({
          ...errors,
          confirmSenhaMessage: "",
          confirmSenha: false,
        });
      }
    }
    if (item.id === "input-email" && item.value) {
      if (!/\S+@\S+\.\S+/.test(item.value)) {
        setErrors({
          ...errors,
          emailMessage: "E-mail inválido",
          email: true,
        });
      } else {
        setErrors({
          ...errors,
          emailMessage: "",
          email: false,
        });
      }
    }
  };
  return (
    <FullPageNotAuth loading={loading}>
      <ContainerRegisterPJ>
        <ContainerInputs>
          <RegisterButtons setActive={props.setActive} active={props.active} />
          <Input
            id="input-name"
            label="Nome"
            placeholder="Nome"
            onChange={(e) => setUserInfo({ ...userInfo, nome: e.target.value })}
            value={userInfo?.nome}
            width="367px"
            error={errors.nome}
          />
          <Input
            id="input-cpf"
            label="CPF"
            placeholder="000.000.000-00"
            width="367px"
            onChange={(e) => setUserInfo({ ...userInfo, cpf: e.target.value })}
            value={userInfo?.cpf ? maskCpf(userInfo?.cpf) : ""}
            onBlur={(e) => handleTestValidation(e.target)}
            error={errors.cpf}
            erroMessage={errors.cpfMessage}
          />
          <Input
            id="input-email"
            label="E-mail"
            placeholder="E-mail"
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            value={userInfo?.email}
            width="367px"
            error={errors.email}
            erroMessage={errors.emailMessage}
            onBlur={(e) => handleTestValidation(e.target)}
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
            value={userInfo?.telefone ? maskPhone(userInfo?.telefone) : ""}
            error={errors.telefone}
          />
          <Input
            id="input-pix"
            label="Pix"
            placeholder="Pix"
            onChange={(e) => setUserInfo({ ...userInfo, pix: e.target.value })}
            value={userInfo?.pix}
            width="367px"
            error={errors.pix}
          />
        </ContainerInputs>
        <ContainerPassword>
          <Input
            id="input-passwrod"
            label="Senha"
            placeholder="***********"
            width="367px"
            type={showPass ? "text" : "password"}
            onChange={(e) =>
              setUserInfo({ ...userInfo, senha: e.target.value })
            }
            value={userInfo?.senha}
            endAdornment={
              <span
                id="hidde-show-password"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <ShowPass /> : <HiddePass />}
              </span>
            }
            error={errors.senha}
            erroMessage={errors.senhaMessage}
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
            error={errors.confirmSenha}
            erroMessage={errors.confirmSenhaMessage}
          />
        </ContainerPassword>
        <ContainerButtons>
          <Button
            id="regiter-button-pf"
            label="Cadastrar"
            onClick={() => handleCreateEmploye()}
          />
          <Link to={"/"}>
            <ButtonSecondary id="button-register" label="Voltar" />
          </Link>
        </ContainerButtons>
      </ContainerRegisterPJ>
    </FullPageNotAuth>
  );
};

export default RegisterPJ;
