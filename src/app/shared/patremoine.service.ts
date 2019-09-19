import { HttpClient } from '@angular/common/http';
import { Patremoine } from './../Models/patremoine.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatremoineService {

  formData: Patremoine;
  readonly rootURL = 'http://localhost:50934/api';
  list : Patremoine[];

  constructor(private http: HttpClient) { }

  postPatremoine() {
    return this.http.post(this.rootURL + '/Patremoines', this.formData);
  }
  putPatremoine() {
    return this.http.put(this.rootURL + '/Patremoines/'+ this.formData.Id, this.formData);
  }
  deletePatremoine(id) {
    return this.http.delete(this.rootURL + '/Patremoines/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Patremoines')
    .toPromise()
    .then(res => this.list = res as Patremoine[]);
  }
}
