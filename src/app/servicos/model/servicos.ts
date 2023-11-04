

export interface Servicos {
  id: String;
  usuarioId: String;
  titulo: String;
  categoria: String;
  descricao: String;
  foto: String;
  criacao: Date;
//  usuario: Array<{usuario_Id: number, nome: string, email: string,
//    senha: string, titulo: string, telefone: string, foto: string, criacao: Date}>,
}

export interface Resposta {
  titulo: string,
  status: Number,
  sucesso: boolean,
  dados: Servicos;
//  usuario: Array<{usuario_Id: number, nome: string, email: string,
//    senha: string, titulo: string, telefone: string, foto: string, criacao: Date}>,
}
