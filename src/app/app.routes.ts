import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./features/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'transferencias', loadChildren: () => import('./features/transferencias/transferencias.module').then(m => m.TransferenciasModule) },
  { path: 'investimentos', loadChildren: () => import('./features/investimentos/investimentos.module').then(m => m.InvestimentosModule) },
  { path: 'outros-servicos', loadChildren: () => import('./features/outros-servicos/outros-servicos.module').then(m => m.OutrosServicosModule) },
  { path: '**', redirectTo: '/inicio' }
];
