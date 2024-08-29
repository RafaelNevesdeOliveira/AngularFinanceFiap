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
}
