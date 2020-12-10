import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Componente, ComponenteEjer1 } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json')
  }

  getEjer1Ops() {
    return this.http.get<ComponenteEjer1[]>('/assets/data/ejercicio1.json')
  }

}
