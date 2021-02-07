import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languages: any = [];

  constructor(private httpClient: HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.httpClient.get("../../../assets/lib/language/ISO-639-1-language.json").subscribe(data =>{
      this.languages = data;
    })
  }

  consultaContinente(continente:string){
      this.router.navigate([`/continent/${continente}`, continente]);
  }

  searchCountries(country:string){
    if(country != ""){
      this.router.navigateByUrl(`search/${country}/3`);
    }
    else{
        alert("The search can't be empty");
    }
  }



}


