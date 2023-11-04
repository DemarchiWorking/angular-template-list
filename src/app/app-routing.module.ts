import { ContaModule } from './conta/conta.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'conta' },
  { path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then(m => m.ServicosModule)
  },
  { path: 'conta',
  loadChildren: () => import('./conta/conta.module').then(m => m.ContaModule)
  },
  { path: 'publicacao',
  loadChildren: () => import('./publicacao/publicacao.module').then(m => m.PublicacaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
