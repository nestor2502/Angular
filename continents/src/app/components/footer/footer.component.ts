import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year:number;
  
  frase = "Esta es una pruebaaaa"
  constructor(){
    this.year = new Date().getFullYear();
  }

}
