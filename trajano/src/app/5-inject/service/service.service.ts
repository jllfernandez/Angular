//phttp.service.ts
import { Injectable } from '@angular/core';
import {ResponseG} from '../../Model/responseG'
import {PeticionEnvio} from '../../Model/peticionEnvio';
//import { Observable } from 'rxjs/Observable';
//import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url: string = "http://localhost:3000/posts";
  private ArrayG: Array<ResponseG>;


  constructor() { }

  postRespuesta(_body: PeticionEnvio) {

//  postRespuesta(_body: PeticionEnvio): Observable<ResponseG> {

   // return this.http.post<ResponseG>(this.url, _body);
  }
  
  getRespuesta() {
    
  //getRespuesta(): Observable<ResponseG[]> {
    //return this.http.get<ResponseG[]>(this.url);
  }
  
  putRespuesta(_id: number, _body: PeticionEnvio) {
    //putRespuesta(_id: number, _body: PeticionEnvio): Observable<ResponseG> {
    let urlcom = this.url + "/" + _id;
    //return this.http.put<ResponseG>(urlcom, _body);
  }

  public llamadaWeb() {
      
    console.log("llamada"); 
   }
}
