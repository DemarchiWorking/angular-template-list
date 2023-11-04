import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacaoRoutingModule } from './publicacao-routing.module';
import { PublicacaoPostComponent } from './containers/publicacao-post/publicacao-post.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicacaoPostComponent
  ],
  imports: [
    CommonModule,
    PublicacaoRoutingModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class PublicacaoModule { }
