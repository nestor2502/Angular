import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {
  
  nuevasCanciones:any[] = [];
  loading:boolean;

  error:boolean = false;
  mensaje_error:string;

  constructor(private spotify:SpotifyService) { 

    this.loading = true;
    this.spotify.getNewReleases()
        .subscribe( (data:any) => {
            this.nuevasCanciones = data;
            this.loading = false;
        }, (error_servicio) => {
            this.loading = false;
            this.error = true;
            console.log(error_servicio.error.error.message)
            this.mensaje_error = error_servicio.error.error.message
        });
  }


}
