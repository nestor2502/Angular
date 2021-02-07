import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesServices:HeroesService,
              private router:Router) {

   }

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();  
  }

  verHeroe(id:number){
    console.log(id)
    this.router.navigate(['/heroe', id])
  }




}
