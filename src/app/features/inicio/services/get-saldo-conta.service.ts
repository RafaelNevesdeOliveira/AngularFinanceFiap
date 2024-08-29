import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movimentacao } from "../model/finance.interface";

@Injectable({
  providedIn: 'root',
})
export class GetSaldoService {
  private apiUrl = environment.url_dev;

  constructor(private http: HttpClient) {}

  getSaldoTotal(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>(`${this.apiUrl}finance`);
  }
}