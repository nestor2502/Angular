import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Country } from '../_models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_URI =  'https://restcountries.eu/rest/v2/';

  constructor(private  http:HttpClient) { }

  getCountries(option:number, param:string){
    if  (option == 1){
      return this.http.get(this.API_URI+'region/'+param)
    }
    if(option == 2){
      return this.http.get(this.API_URI+'lang/'+param)
    }
    if(option == 3){
      return this.http.get(this.API_URI+'name/'+param)
    }
    else{
      console.log('Incorrect query parameters')
    }
  }


}
