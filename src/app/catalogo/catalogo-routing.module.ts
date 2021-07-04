import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoPage } from './catalogo.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPageRoutingModule {}
