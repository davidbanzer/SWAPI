import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeciePageRoutingModule } from './specie-routing.module';

import { SpeciePage } from './specie.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeciePageRoutingModule,
    ComponentsModule
  ],
  declarations: [SpeciePage]
})
export class SpeciePageModule {}
