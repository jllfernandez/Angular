//phttp.service.ts
import { Injectable } from '@angular/core';
import {ResponseG} from '../../Model/responseG'
import {PeticionEnvio} from '../../Model/peticionEnvio';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
 public result: number; 
  constructor() { }

  public fromAToB(a) {
   this.result = parseInt(a) + 15; 
   
  
   console.log(this.result);
  }
}
