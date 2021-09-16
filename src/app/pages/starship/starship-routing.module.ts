import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarshipPage } from './starship.page';

const routes: Routes = [
  {
    path: '',
    component: StarshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarshipPageRoutingModule {}
