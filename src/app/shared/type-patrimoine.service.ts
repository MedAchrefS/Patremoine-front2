import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypePatrimoine } from '../Models/type-patrimoine.model';

@Injectable({
  providedIn: 'root'
})
export class TypePatrimoineService {

  formData: TypePatrimoine;
  readonly rootURL = 'http://localhost:50934/api';
  list : TypePatrimoine[];

  constructor(private http: HttpClient) { }

  postTypePatrimoine() {
    return this.http.post(this.rootURL + '/TypePatrimoines', this.formData);
  }
  putTypePatrimoine() {
    return this.http.put(this.rootURL + '/TypePatrimoines/'+ this.formData.Id, this.formData);
  }
  deleteTypePatrimoine(id) {
    return this.http.delete(this.rootURL + '/TypePatrimoines/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/TypePatrimoines')
    .toPromise()
    .then(res => this.list = res as TypePatrimoine[]);
  }
}
