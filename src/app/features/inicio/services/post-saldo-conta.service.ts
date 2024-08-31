import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Movimentacao } from "../model/finance.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PostSaldoService {
  private apiUrl = environment.url_dev;

  constructor(private http: HttpClient) {}

  adicionarTransacao(movimentacao: Movimentacao): Observable<Movimentacao> {
    return this.http.post<Movimentacao>(`${this.apiUrl}finance`, movimentacao);
  }

  // adicionarTransacao(movimentacao: Movimentacao): Observable<{ adicionarMovimentacao: Movimentacao }> {
  //   return this.apollo.mutate({
  //     mutation: gql`
  //       mutation ($tipoMovimentacao: String!, $valor: Float!, $dataMovimentacao: String!) {
  //         adicionarMovimentacao(
  //           tipoMovimentacao: $tipoMovimentacao
  //           valor: $valor
  //           dataMovimentacao: $dataMovimentacao
  //         ) {
  //           id
  //           tipoMovimentacao
  //           valor
  //           dataMovimentacao
  //         }
  //       }
  //     `,
  //     variables: {
  //       tipoMovimentacao: movimentacao.tipoMovimentacao,
  //       valor: movimentacao.valor,
  //       dataMovimentacao: movimentacao.dataMovimentacao,
  //     },
  //   });
  // }
}
