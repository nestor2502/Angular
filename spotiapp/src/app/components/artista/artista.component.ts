import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  
  artista:any = {};
  respondio:boolean;
  top_tracks:any[] = [];

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {
    this.respondio = true;
    this.router.params.subscribe(param => {
            this.getArtista(param['id'])
            this.getTopTracks(param['id'])
          })
    
   }

  ngOnInit(): void {
  }
  
  getArtista(id:string){
    this.respondio = true;
    this.spotify.getArtista(id).subscribe( artista => {
                                    console.log(artista)
                                    this.artista = artista;
                                    this.respondio = false;
                                });
  }

  getTopTracks( id:string){
    this.spotify.getTopTrack(id)
                    .subscribe(top_tracks => {
                      console.log(top_tracks)
                      this.top_tracks = top_tracks;
                    });
  }

  
 
}
