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

  getEjer1Ops() { // Recibo los datos del Json
    return this.http.get<ComponenteEjer1[]>('/assets/data/ejercicio1.json')
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
