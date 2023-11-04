import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { ContaComponent } from './containers/conta/conta.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ContaCadastroComponent } from './containers/conta-cadastro/conta-cadastro.component';
import { ContaListaComponent } from './components/conta-lista/conta-lista.component';
import { ContaLoginComponent } from './containers/conta-login/conta-login.component';
import { ContaPerfilComponent } from './containers/conta-perfil/conta-perfil.component';
import {MatDividerModule} from '@angular/material/divider';
import { ContaSeguidoresComponent } from './components/conta-seguidores/conta-seguidores.component';
import { ContaSeguindoComponent } from './components/conta-seguindo/conta-seguindo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ContaAmigosComponent } from './containers/conta-amigos/conta-amigos.component';


@NgModule({
  declarations: [
    ContaComponent,
    ContaCadastroComponent,
    ContaListaComponent,
    ContaLoginComponent,
    ContaPerfilComponent,
    ContaSeguidoresComponent,
    ContaSeguindoComponent,
    ContaAmigosComponent,
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTabsModule


  ]
})
export class ContaModule { }
