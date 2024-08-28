import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutrosServicosComponent } from './outros-servicos/outros-servicos.component';

const routes: Routes = [
  {path: '', component: OutrosServicosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutrosServicosRoutingModule { }
