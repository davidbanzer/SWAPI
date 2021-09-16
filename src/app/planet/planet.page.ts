import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../api/peliculas.service';
import { Planets } from '../models/Planets';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.page.html',
  styleUrls: ['./planet.page.scss'],
})
export class PlanetPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  planet_id: string;
  planet: Planets = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService) { }

  ngOnInit() {
    this.planet_id = this.ar.snapshot.paramMap.get('id');
    this.fetchPlanetById(this.planet_id);
  }
  fetchPlanetById(url: string){
    this.api.getPlanetById(url).subscribe(data => {
      this.planet = data;
    });
  }

}
