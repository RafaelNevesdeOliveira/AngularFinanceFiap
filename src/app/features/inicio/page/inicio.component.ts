import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movimentacao } from '../model/finance.interface';
import { GetSaldoService } from '../services/get-saldo-conta.service';
import { carregarMovimentacoes } from '../store/transacao.actions';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(
    private store: Store,
    private saldoService: GetSaldoService
  ) {}

  ngOnInit(): void {
    this.saldoService.getSaldoTotal().subscribe((movimentacoes: Movimentacao[]) => {
      this.store.dispatch(carregarMovimentacoes({ movimentacoes }));
    });
  }
}
