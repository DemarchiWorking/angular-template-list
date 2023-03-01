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

@NgModule({
  declarations: [
    ContaComponent,
    ContaCadastroComponent,
    ContaListaComponent,
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,

  ]
})
export class ContaModule { }
