import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { }
  obtenerDatos(){
    return this.http.get('https://images-api.nasa.gov/search?q=galaxy&media_type=image');
  }
}
