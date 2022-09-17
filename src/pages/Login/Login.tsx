import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {
  ButtonContainer,
  ButtonRegister,
  ForgotPassContainer,
  ForgotPassword,
  InputContainer,
  InputContainerMain,
  TextRegisterContainer,
  TextRegisterRegular,
} from "./styles";
import { HiddePass } from "../../img/HiddePass";
import { ShowPass } from "../../img/ShowPass";
import { connect } from "../../api/connect";
import { FullPageNotAuth } from "../../components/FullPageNotAuth/FullPageNotAuth";
import { Link } from "react-router-dom";
import { maskCpf } from "../../utils/mask";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async () => {
    const body = { cpf: username, senha: password };

    if (body) {
      const clientConnect = await connect("autenticacao-cliente", body);
      switch (clientConnect.code) {
        case "ERR_BAD_RESPONSE":
          const businessConnect = await connect(
            "autenticacao-funcionario",
            body
          );
          if (businessConnect.code === "ERR_BAD_RESPONSE") {
            console.log("usuario e/ou senha invalido");
          } else {
            console.log(businessConnect);
          }
          break;
        case "":
          console.log(clientConnect);
          break;
      }
    } else {
      console.log("error");
    }
  };
  return (
    <FullPageNotAuth>
      <InputContainerMain>
        <InputContainer>
          <Input
            id="input-username"
            label="Cpf:"
            width="367px"
            value={maskCpf(username)}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="000.000.000-00"
          />
          <Input
            id="input-password"
            label="Senha:"
            width="367px"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPass ? "text" : "password"}
            endAdornment={
              <span
                id="hidde-show-password"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <ShowPass /> : <HiddePass />}
              </span>
            }
          />
          <ForgotPassContainer>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </ForgotPassContainer>
          <ButtonContainer>
            <Button
              id="button-login"
              label="Entrar"
              highlightLabelText="Entrar"
              onClick={() => handleLogin()}
            />
            <TextRegisterContainer>
              <TextRegisterRegular>Não tem conta?</TextRegisterRegular>
              <Link to={"/register"}>
                <ButtonRegister>Cadastre-se aqui!</ButtonRegister>
              </Link>
            </TextRegisterContainer>
          </ButtonContainer>
        </InputContainer>
      </InputContainerMain>
    </FullPageNotAuth>
  );
}
