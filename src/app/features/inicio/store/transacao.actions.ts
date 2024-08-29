import { createAction, props } from "@ngrx/store";
import { Movimentacao } from "../model/finance.interface";

export const adicionarTransacao = createAction(
  '[Transacao] Adicionar Transacao',
  props<{ movimentacao: Movimentacao }>()
);

export const carregarMovimentacoes = createAction(
  '[Transacao] Carregar Movimentacoes',
  props<{ movimentacoes: Movimentacao[] }>()
);