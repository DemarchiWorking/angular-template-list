import { SharedModule } from './../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './containers/servicos/servicos.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ServicoFormComponent } from './containers/servico-form/servico-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicosListaComponent } from '../servicos/components/servicos-lista/servicos-lista.component';

@NgModule({
  declarations: [
    ServicosComponent,
    ServicoFormComponent,
    ServicosListaComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,

  ]
})
export class ServicosModule { }
