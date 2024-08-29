import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectSaldoTotal } from '../../store/transacao.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-card-saldo',
  templateUrl: './card-saldo.component.html',
  styleUrl: './card-saldo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSaldoComponent {
  saldo$: Observable<number>;
  public mostrarSaldo: boolean = true;
  public dataAtual: Date = new Date();

  constructor(
    private store: Store
  ){
    this.saldo$ = this.store.select(selectSaldoTotal)
  }

  ngOnInit(): void {
    this.dataAtual = new Date()
  }

  toggleMostrarSaldo(): void{
    this.mostrarSaldo = !this.mostrarSaldo
  }
}
