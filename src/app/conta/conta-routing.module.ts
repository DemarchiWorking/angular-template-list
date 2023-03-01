import { ContaCadastroComponent } from './containers/conta-cadastro/conta-cadastro.component';
import { ContaComponent } from './containers/conta/conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContaComponent},
  { path: 'novo', component: ContaCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
