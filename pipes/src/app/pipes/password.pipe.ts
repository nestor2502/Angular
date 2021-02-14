import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activado:boolean = false): unknown {
    
    // Esta fue mi solucion
    /* 
    let letter = value.split('');
    if(activado){
      return value
    }
    else{
        let x = letter.map( x => x = '*');
        return x.join('');

    }
   */ 

    //esta es mejor
     return (activado)? value: '*'.repeat(value.length);
    
  }

}
