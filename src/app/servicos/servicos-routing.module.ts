import { ServicoResolver } from './guarda/servico.resolver';
import { ServicoFormComponent } from './containers/servico-form/servico-form.component';
import { ServicosComponent } from './containers/servicos/servicos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ServicosComponent},
  { path: 'novo', component: ServicoFormComponent, resolve: {servico: ServicoResolver}},
  { path: 'editar/:id', component: ServicoFormComponent, resolve: {servico: ServicoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
