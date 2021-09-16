import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { PeliculasService } from '../../api/peliculas.service';
import { Film, Result } from '../../models/Film';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  filmList: Result[] = [];
  film: Result  = {};
  constructor(private api: PeliculasService, private navCtrl: NavController) {

  }
  ngOnInit(): void {
    this.fetchFilmList();
  }
  fetchFilmList(){
    this.api.getFilmsList().subscribe( data => {
      this.filmList = data?.results;
      console.log(this.filmList);
    });
  }
  getUrlFilm(url: string){
    let urlAux: string;
    this.api.getFilmByUrl(url).subscribe(data =>{
      this.film = data;
      urlAux = data.url.split('/')[5];
      this.navCtrl.navigateForward(['/film-detail/'+urlAux]);
      console.log(urlAux);
    });
  }

}
