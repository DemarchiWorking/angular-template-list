import { ContaSeguidoresComponent } from './components/conta-seguidores/conta-seguidores.component';
import { ContaPerfilComponent } from './containers/conta-perfil/conta-perfil.component';
import { ContaLoginComponent } from './containers/conta-login/conta-login.component';
import { ContaCadastroComponent } from './containers/conta-cadastro/conta-cadastro.component';
import { ContaComponent } from './containers/conta/conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaAmigosComponent } from './containers/conta-amigos/conta-amigos.component';

const routes: Routes = [
  { path: '', component: ContaLoginComponent},
  { path: 'login', component: ContaLoginComponent},
//  { path: 'gestao-usuario', component: ContaComponent},
  { path: 'novo', component: ContaCadastroComponent},
  { path: 'perfil', component: ContaPerfilComponent},
  { path: 'seguidores', component: ContaSeguidoresComponent},
  { path: 'amigos', component: ContaAmigosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
