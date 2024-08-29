import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./transacao.reducer";

export const selectTransacaoState = createFeatureSelector<State>('transacao');

export const selectSaldoTotal = createSelector(
  selectTransacaoState,
  (state: State) => {
    return state.movimentacoes.reduce((acc, mov) => {
      return mov.tipoMovimentacao === 'DEPOSITO' ? acc + mov.valor : acc - mov.valor;
    }, 0);
  }
);
