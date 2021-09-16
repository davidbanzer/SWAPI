import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmDetailPageRoutingModule } from './film-detail-routing.module';

import { FilmDetailPage } from './film-detail.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FilmDetailPage]
})
export class FilmDetailPageModule {}
