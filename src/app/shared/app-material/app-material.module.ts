import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    MatTableModule,
    MatToolbarModule,
    MatCardModule
  ],

})
export class AppMaterialModule { }
