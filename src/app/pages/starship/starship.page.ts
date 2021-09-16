import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/api/peliculas.service';
import { Starship } from '../../models/Starship';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.page.html',
  styleUrls: ['./starship.page.scss'],
})
export class StarshipPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  starship_id: string;
  starship: Starship = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService) { }

  ngOnInit() {
    this.starship_id = this.ar.snapshot.paramMap.get('id');
    this.fetchStarshipById(this.starship_id);
  }
  fetchStarshipById(id: string){
    this.api.getStarshipById(id).subscribe(data => {
      this.starship = data;
    });
  }

}
