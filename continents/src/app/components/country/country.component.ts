import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../_services/country.service';
import { Country } from '../../_models/country';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{

    countries:Country[] |any;
    country:Country | any;

    countinent_name:string;
    language_selected:string;
    opc:number;
    type:string;

  constructor(private countryService:CountryService,private _route:ActivatedRoute, private router:Router) { 
    this._route.params.subscribe(params => {
      this.opc= params['op'];
      this.type= params['type'];

      if(this.opc == 1){
        this.getCountries(this.opc, this.type);
      }
      if(this.opc == 2){
        this.getCountries(this.opc, this.type);
      }
      else if(this.opc == 3){
        
        this.getCountries(this.opc, this.type);
      }
      });
      
              }

  getCountries(option:number, param:string){
    this.countries= [];
    this.countryService.getCountries(option, param).subscribe(
      res =>{
          this.countries = res;
      },        
      err=> {console.error(err);
            this.router.navigateByUrl(`no-result`);;}
    );
    
  }


  


}
