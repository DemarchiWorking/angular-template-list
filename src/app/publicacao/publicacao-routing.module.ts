import { PublicacaoPostComponent } from './containers/publicacao-post/publicacao-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PublicacaoPostComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicacaoRoutingModule { }
