import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CatalogoPage } from '../catalogo/catalogo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPage,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CatalogoPage]
})
export class HomePageModule {}
