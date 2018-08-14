import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AnimeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimeProvider {

  url = "http://localhost:8100/api/animes/";

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  add(sale) {
    return this.http.post(this.url, sale);
  }

  getById(id) {
    return this.http.get(this.url + id);
  }
}
