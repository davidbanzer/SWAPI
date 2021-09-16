import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/api/peliculas.service';
import { Vehicle } from '../../models/Vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vehicle_id: string;
  vehicle: Vehicle = {};
  constructor(private ar: ActivatedRoute, private api: PeliculasService) { }

  ngOnInit() {
    this.vehicle_id = this.ar.snapshot.paramMap.get('id');
    this.fetchVehicleById(this.vehicle_id);
  }
  fetchVehicleById(id: string){
    this.api.getVehicleById(id).subscribe(data => {
      this.vehicle = data;
    });
  }
}
