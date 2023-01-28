import { ServicosComponent } from './servicos/containers/servicos/servicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'servicos' },
  { path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
