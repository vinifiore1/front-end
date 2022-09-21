export interface IRegisterClient {
  nome?: string;
  cpf?: string;
  telefone?: string;
  dataNascimento?: string;
  senha?: string;
  confirmSenha?: string;
  email?: string;
  pix?: string;
}

export interface IErrorsClient {
  nome?: boolean;
  cpf?: boolean;
  dataNascimento?: boolean;
  telefone?: boolean;
  senha?: boolean;
  confirmSenha?: boolean;
  nomeMessage?: string;
  cpfMessage?: string;
  dataNascimentoMessage?: string;
  telefoneMessage?: string;
  senhaMessage?: string;
  confirmSenhaMessage?: string;
  email?: boolean;
  emailMessage?: string;
  pix?: boolean;
}
