import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recarga } from '../recarga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargasserviceService {

  urlConsultaRecargas = "http://localhost:8080/recargaonline/recargas";

  constructor(private httpclient: HttpClient) { }

  consultarListaRecargas():Observable<Recarga[]>{
    return this.httpclient.get<Recarga[]>(`${this.urlConsultaRecargas}`)
  }




}
