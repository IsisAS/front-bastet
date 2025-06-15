export type Usuario = {
  nome: string;
  email: string;
  senha: string;
  nascimento: Date;
};

export const UsurioMockup: Usuario[] = [
  {
    email: "teste@email.com",
    nascimento: new Date(1990, 4, 31),
    nome: "Jason McGaiver",
    senha: "1234"
  }
]

