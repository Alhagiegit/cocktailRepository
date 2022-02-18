import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDrinkPage } from './search-drink.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDrinkPageRoutingModule {}
