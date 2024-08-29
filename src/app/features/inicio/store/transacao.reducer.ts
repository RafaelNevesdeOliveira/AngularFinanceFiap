import { createReducer, on } from "@ngrx/store";
import { Movimentacao } from "../model/finance.interface";
import { adicionarTransacao, carregarMovimentacoes } from "./transacao.actions";
import { TipoMovimentacao } from "../enum/tipo-movimentacao.enum";

export interface State {
  movimentacoes: Movimentacao[];
}

export const initialState: State = {
  movimentacoes: []
}

export const transacaoReducer = createReducer(
  initialState,
  on(carregarMovimentacoes, (state, { movimentacoes }) => ({
    ...state,
    movimentacoes: [...movimentacoes]
  })),
  on(adicionarTransacao, (state, { movimentacao }) => ({
    ...state,
    movimentacoes: [...state.movimentacoes, movimentacao]
  }))
)

export function getSaldoTotal(movimentacoes: Movimentacao[]):number{
  return movimentacoes.reduce((acc, mov) => {
    return mov.tipoMovimentacao === TipoMovimentacao.DEPOSITO ? acc + mov.valor : acc - mov.valor;
  }, 0);
}