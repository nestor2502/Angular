import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

  heroes:any = {};
  keywords:string;

  constructor(private activatedRoute:ActivatedRoute, 
              private _heroeService:HeroesService,
              private router:Router) {
                this.activatedRoute.params.subscribe( params  => {
                  this.heroes = this._heroeService.buscarHeroes(params['keyword']);
                  this.keywords = params['keyword'];
                });
                 }

  ngOnInit(): void {
    
  }
  

}
