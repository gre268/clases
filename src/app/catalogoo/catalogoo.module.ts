import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogooPageRoutingModule } from './catalogoo-routing.module';

import { CatalogooPage } from './catalogoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogooPageRoutingModule
  ],
  declarations: [CatalogooPage]
})
export class CatalogooPageModule {}
