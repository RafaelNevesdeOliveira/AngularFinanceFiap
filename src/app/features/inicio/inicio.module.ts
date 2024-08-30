import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { InicioRoutingModule } from './inicio-routing.module';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './page/inicio.component';
import { CardSaldoModule } from './modules/card-saldo/card-saldo.module';
import { transacaoReducer } from './store/transacao.reducer';
import { StoreModule } from '@ngrx/store';
import { NovaTransacaoModule } from './modules/nova-transacao/nova-transacao.module';
import { ListarTransacoesModule } from './modules/listar-transacoes/listar-transacoes.module';

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
    NovaTransacaoModule,
    ListarTransacoesModule
  ]
})
export class InicioModule { }
