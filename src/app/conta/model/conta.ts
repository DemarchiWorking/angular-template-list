import { Servicos } from "src/app/servicos/model/servicos";

export interface Conta {
  _id: String;
  nome: String;
  email: String;
  senha: String;
  //confirmPassword: String;
  foto: String;
  telefone: String;
  criacao: Date;
  servicos: [],
  produtos: [],
  AmizadesRecebidas:[],
  AmizadesEnviadas: []
}
