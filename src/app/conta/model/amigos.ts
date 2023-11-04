
export interface Amizade {
  amizadeId: string;
  usuarioEnviouId: string;
  usuarioRecebeuId: string;
  status: boolean;
  usuarioEnviou: {
      usuarioId: string;
      nome: string;
      email: string;
      senha: string;
      titulo: string;
      telefone: string;
      foto: string;
      criacao: string;
      servicos: any[];
      produtos: any[];
      amizadesEnviadas: any[];
      amizadesRecebidas: any[];
  };
  usuarioRecebeu: {
      usuarioId: string;
      nome: string;
      email: string;
      senha: string;
      titulo: string;
      telefone: string;
      foto: string;
      criacao: string;
      servicos: any[];
      produtos: any[];
      amizadesEnviadas: any[];
      amizadesRecebidas: any[];
  };
}