import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../api/peliculas.service';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  character_id: string;
  character: Character = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService) { }

  ngOnInit() {
    this.character_id = this.ar.snapshot.paramMap.get('id');
    this.fetchCharacterById(this.character_id);
  }
  fetchCharacterById(id: string){
    this.api.getCharacterById(id).subscribe(data => {
      this.character = data;
    });
  }

}
