import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesServices:HeroesService,
              private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this.router.navigate(['/heroe?', termino])
  }


}
