import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pairs } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  
  usuario = {
      nombre: 'Nestor',
      apellido: 'Vazquez',
      correo:'nestor2502@ciencias.unam.mx',
      pais:'MEX',
      genero:'M'
  };

  paises:any[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
      this.paisService.getPaises()
            .subscribe(paises => {
              this.paises = paises;
              this.paises.unshift({nombre:'[Seleccione un país]', codigo:''})
            });
  }

  guardar(forma:NgForm){
    console.log(forma)
    if(forma.invalid){
      Object.values(forma.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return
    }
    console.log(forma.value)
    
  }

}
