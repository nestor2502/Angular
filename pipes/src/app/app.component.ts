import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Nestor Vazquez XD';
  nombre2:string = 'NeSTOr SeMEr VaZQUez CorDERo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi:number = Math.PI;
  porcentaje: number = 0.234323;
  salario:number = 12500.50;
  fecha: Date = new Date();
  idioma: string = 'fr';
  videoUrl:string = 'https://www.youtube.com/embed/odM92ap8_c0';
  activar:boolean = false;
  heroe = {
    nombre: 'Logan',
    clase: 'wolverine',
    edad: 150, 
    direccion:{
      calle:'Primera',
      casa:20
    }
  };

  valorPromesa = new Promise<string>((resolve) =>{
      setTimeout(() => {resolve('llegó la data')}, 5000);
  });

  cambiaIdioma(region){
    this.idioma = region;
  }

  showPassword(){
    this.activar = !this.activar;
  }
}
