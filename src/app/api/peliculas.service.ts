import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';
import { Film, Result } from '../models/Film';
import { Planets } from '../models/Planets';
import { Species } from '../models/Species';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  //film
  getFilmsList(){
    return this.http.get<Film>('https://swapi.dev/api/films/');
  }
  getFilmByUrl(url: string){
    return this.http.get<Result>(url);
  }
  getFilmById(id: string){
    return this.http.get<Result>('https://swapi.dev/api/films/'+id);
  }
  //character
  getCharacterByUrl(url: string) {
    return this.http.get<Character>(
      url
    );
  }
  getCharacterById(id: string){
    return this.http.get<Character>('https://swapi.dev/api/people/'+id);
  }
  //planets
  getPlanetByUrl(url: string){
    return this.http.get<Planets>(
      url
    );
  }
  //species
  getSpecieByUrl(url: string) {
    return this.http.get<Species>(
      url
    );
  }
}
