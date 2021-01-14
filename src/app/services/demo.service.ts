import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  url = "../../assets/modulos.json"
  constructor(private http:HttpClient) { }

  consumirModulos(){
    return this.http.get(this.url);
  }
}
