import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'track'
})
export class TrackPipe implements PipeTransform {

  constructor (private domSanitizer: DomSanitizer){}

  transform(uri:string): unknown {
    console.log(uri)
    const url = 'https://open.spotify.com/embed/track/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + uri.slice(14));
  }

}
