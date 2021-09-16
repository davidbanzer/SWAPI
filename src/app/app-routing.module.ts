import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FilmDetailPage } from './pages/film-detail/film-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'film-detail/:id',
    loadChildren: () => import('./pages/film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./pages/character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'planet/:id',
    loadChildren: () => import('./pages/planet/planet.module').then( m => m.PlanetPageModule)
  },
  {
    path: 'specie/:id',
    loadChildren: () => import('./pages/specie/specie.module').then( m => m.SpeciePageModule)
  },
  {
    path: 'starship/:id',
    loadChildren: () => import('./pages/starship/starship.module').then( m => m.StarshipPageModule)
  },
  {
    path: 'vehicle/:id',
    loadChildren: () => import('./pages/vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
