import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movimentacao } from '../../model/finance.interface';
import { Store } from '@ngrx/store';
import { selectMovimentacoes } from '../../store/transacao.selectors';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrl: './listar-transacoes.component.scss'
})
export class ListarTransacoesComponent {
  transacoes$: Observable<Movimentacao[]>

  constructor(private store: Store){
    this.transacoes$ = this.store.select(selectMovimentacoes).pipe(
      map(movimentacoes => movimentacoes.slice(-8).reverse())
    )
  }
}
