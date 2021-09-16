
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PeliculasService } from '../../api/peliculas.service';
import { Character } from '../../models/Character';
import { Result } from '../../models/Film';
import { Planets } from '../../models/Planets';
import { Species } from '../../models/Species';
import { Starship } from '../../models/Starship';
import { Vehicle } from '../../models/Vehicle';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  film_id: string;
  film: Result = {};
  //arreglos
  characters: Character[] = [];
  species: Species[] = [];
  vehicles: Vehicle[] = [];
  planets: Planets[] = [];
  starships: Starship[] = [];
  //objetos
  character: Character = {};
  planet: Planets = {};
  specie: Species = {};
  starship: Starship = {};
  vehicle: Vehicle = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService, private navCtrl: NavController) { }

  ngOnInit() {
    this.film_id = this.ar.snapshot.paramMap.get('id');
    this.fetchFilmById(this.film_id);
  }
  fetchFilmById(id: string){
    this.api.getFilmById(id).subscribe(data => {
      this.film = data;
      //console.log(this.film);
      this.getCharacters();
      this.getPlanets();
      this.getSpecies();
      this.getStarships();
      this.getVehicles();
    });
  }
  //for each para llamar a los endpoints
  getCharacters() {
    this.film.characters.forEach(characterUrl => {
      this.fetchCharacter(characterUrl);
    });
  }
  getPlanets(){
    this.film.planets.forEach(planetUrl => {
      this.fetchPlanet(planetUrl);
    });
  }
  getSpecies(){
    this.film.species.forEach(specieUrl => {
      this.fetchSpecie(specieUrl);
    });
  }
  getStarships(){
    this.film.starships.forEach(starshipUrl => {
      this.fetchStarship(starshipUrl);
    });
  }
  getVehicles(){
    this.film.vehicles.forEach(vehicleUrl => {
      this.fetchVehicle(vehicleUrl);
    });
  }
  //métodos para llamar a la api
  fetchCharacter(characterUrl: string) {
    this.api.getCharacterByUrl(characterUrl).subscribe(data => {
      this.characters.push(data);
    });
  }
  fetchPlanet(planetUrl: string){
    this.api.getPlanetByUrl(planetUrl).subscribe(data => {
      this.planets.push(data);
    });
  }
  fetchSpecie(specieUrl: string){
    this.api.getSpecieByUrl(specieUrl).subscribe(data => {
      this.species.push(data);
    });
  }
  fetchStarship(starshipUrl: string){
    this.api.getStarshipByUrl(starshipUrl).subscribe(data => {
      this.starships.push(data);
    });
  }
  fetchVehicle(vehicleUrl: string){
    this.api.getVehicleByUrl(vehicleUrl).subscribe(data => {
      this.vehicles.push(data);
    });
  }
  //métodos para redireccionar
  getUrlCharacter(url: string){
    let urlAux;
    this.api.getCharacterByUrl(url).subscribe(data =>{
      this.character = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/character/'+urlAux]);
      //console.log(urlAux);
    });
  }
  getUrlPlanet(url: string){
    let urlAux;
    this.api.getPlanetByUrl(url).subscribe(data =>{
      this.planet = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/planet/'+urlAux]);
    });
  }
  getUrlSpecie(url: string){
    let urlAux;
    this.api.getSpecieByUrl(url).subscribe(data =>{
      this.specie = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/specie/'+urlAux]);
    });
  }
  getUrlStarship(url: string){
    let urlAux;
    this.api.getStarshipByUrl(url).subscribe(data =>{
      this.starship = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/starship/'+urlAux]);
      console.log(urlAux);
    });
  }
  getUrlVehicle(url: string){
    let urlAux;
    this.api.getVehicleByUrl(url).subscribe(data =>{
      this.vehicle = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/vehicle/'+urlAux]);
      console.log(urlAux);
    });
  }
}
