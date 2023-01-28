import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroComponent } from './components/erro/erro.component';
import { DialogoConfirmacaoComponent } from './components/dialogo-confirmacao/dialogo-confirmacao.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ErroComponent,
    DialogoConfirmacaoComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    MatButtonModule
  ],
  exports: [ErroComponent]
})
export class SharedModule { }
