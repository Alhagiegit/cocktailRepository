import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDrinkPageRoutingModule } from './search-drink-routing.module';

import { SearchDrinkPage } from './search-drink.page';
import {MatCardModule } from '@angular/material/card';
import {MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDrinkPageRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [SearchDrinkPage]
})
export class SearchDrinkPageModule {}
