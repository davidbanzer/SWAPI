import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmDetailPage } from './film-detail/film-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'film-detail/:id',
    loadChildren: () => import('./film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
