import { Injectable } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

import {ServiceService} from  '../../5-inject/service/service.service';
import {ConnectoService} from  '../common/connecto.service';
@Injectable({
  providedIn: 'root'
})
export class ServicioConcretoService {
  public result: number; 
  
  constructor(private connhttp: ConnectoService) {
    
   }


  public fromAToB(a) {
    this.result = parseInt(a) + 15; 
    
   
    console.log(this.result);
   }

   public sendTo() {
    this.connhttp.getRespuesta(); 
       
    
   }

   public llamadaWeb() {
    this.connhttp.llamadaWeb();
   }
}

