import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    AppMaterialModule
  ]
})
export class ServicosModule { }
