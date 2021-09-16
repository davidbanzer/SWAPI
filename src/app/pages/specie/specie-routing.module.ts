import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeciePage } from './specie.page';

const routes: Routes = [
  {
    path: '',
    component: SpeciePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciePageRoutingModule {}
