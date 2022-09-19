import { useState } from "react";
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

interface IErrorProps {
  error?: boolean;
  message?: string;
}

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<IErrorProps>();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const body = { cpf: username, senha: password };
    setLoading(true);

    if (body.cpf !== "" && body.senha !== "") {
      const clientConnect = await connect("autenticacao-cliente", body);

      if (clientConnect.code === "ERR_BAD_RESPONSE") {
        const businessConnect = await connect("autenticacao-funcionario", body);
        if (businessConnect.code === "ERR_BAD_RESPONSE") {
          setError({ error: true, message: "CPF e/ou senha inválidos" });
          setLoading(false);
        } else {
          setLoading(false);
          sessionStorage.setItem("token", businessConnect.token);
          window.location.assign("/home");
        }
      } else {
        setLoading(false);
        sessionStorage.setItem("token", clientConnect.token);
        window.location.assign("/home");
      }
    } else {
      setLoading(false);
      setError({ error: true, message: "Necessário preencher os campos" });
    }
  };

  return (
    <FullPageNotAuth loading={loading}>
      <InputContainerMain>
        <InputContainer>
          <Input
            id="input-username"
            label="Cpf:"
            width="367px"
            value={maskCpf(username)}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="000.000.000-00"
            error={error?.error}
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
            error={error?.error}
            erroMessage={error?.message}
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
