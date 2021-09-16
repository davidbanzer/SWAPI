import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarshipPageRoutingModule } from './starship-routing.module';

import { StarshipPage } from './starship.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarshipPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StarshipPage]
})
export class StarshipPageModule {}
