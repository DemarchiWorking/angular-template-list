import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroComponent } from './components/erro/erro.component';


@NgModule({
  declarations: [
    ErroComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErroComponent]
})
export class SharedModule { }
