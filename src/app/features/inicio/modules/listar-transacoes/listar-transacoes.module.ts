import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTransacoesComponent } from './listar-transacoes.component';
import { MatCardModule} from '@angular/material/card'


@NgModule({
  declarations: [ListarTransacoesComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    ListarTransacoesComponent
  ]
})
export class ListarTransacoesModule { }
