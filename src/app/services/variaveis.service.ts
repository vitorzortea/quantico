import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VariaveisService {

  variaveis: any;

  constructor(
    private http: HttpClient
  ) { }

  getAPI(url) {
    return this.http.get(`${url}`);
  }

  getVariavel() {
    this.getAPI(`http://localhost:3000/variaveis`).subscribe(
      (res) => { this.variaveis = res; },
      (error) => console.log(error)
    );
  }
}
