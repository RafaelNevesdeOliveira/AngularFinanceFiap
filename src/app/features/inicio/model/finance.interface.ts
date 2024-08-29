import { TipoMovimentacao } from "../enum/tipo-movimentacao.enum";

export interface Movimentacao {
  id: number;
  tipoMovimentacao: TipoMovimentacao
  valor: number;
  dataMovimentacao: string;
}