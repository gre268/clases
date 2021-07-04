import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogooPage } from './catalogoo.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogooPageRoutingModule {}
