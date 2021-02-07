import {Component} from '@angular/core';


@Component({
    selector: 'app-body', 
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase:any = {
        mensaje:'Un poder con lleva una gran responsabilidad',
        autor:'Ben Parker'
    }

    personajes:string[] = ["Spiderman", "Capitan America", "Pantera Negra"];
}