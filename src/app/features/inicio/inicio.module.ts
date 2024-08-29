import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { InicioRoutingModule } from './inicio-routing.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CardSaldoModule } from './components/card-saldo/card-saldo.module';
import { transacaoReducer } from './store/transacao.reducer';
import { StoreModule } from '@ngrx/store';
import { NovaTransacaoModule } from './components/nova-transacao/nova-transacao.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatListModule,
    RouterModule,
    CardSaldoModule,
    StoreModule.forRoot({
      transacao: transacaoReducer
    }),
    NovaTransacaoModule
  ]
})
export class InicioModule { }
