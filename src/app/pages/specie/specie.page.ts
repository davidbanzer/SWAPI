import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/api/peliculas.service';
import { Species } from 'src/app/models/Species';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.page.html',
  styleUrls: ['./specie.page.scss'],
})
export class SpeciePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  specie_id: string;
  specie: Species = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService) { }

  ngOnInit() {
    this.specie_id = this.ar.snapshot.paramMap.get('id');
    this.fetchSpecieById(this.specie_id);
  }
  fetchSpecieById(url: string){
    this.api.getSpecieById(url).subscribe(data => {
      this.specie = data;
      console.log(this.specie);
    });
  }

}
