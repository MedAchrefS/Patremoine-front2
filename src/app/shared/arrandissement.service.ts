import { Arrandissement } from './../Models/arrandissement.model';
import { Region } from 'src/app/Models/region.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrandissementService {

  list : Arrandissement[];
  formData: Arrandissement;
  readonly rootURL = 'http://localhost:50934/api';
  constructor(private http: HttpClient) { }

  postArrandissements() {
    return this.http.post(this.rootURL + '/Arrandissements', this.formData);
  }
  putArrandissement() {
    return this.http.put(this.rootURL + '/Arrandissements/'+ this.formData.Id, this.formData);
  }
  deleteArrandissement(id) {
    return this.http.delete(this.rootURL + '/Arrandissements/'+ id);
  }
  getArrandissement(id){
    return this.http.get(this.rootURL + '/Arrandissements'+id);
  }

  getArrandissementss(){
    return this.http.get<Arrandissement[]>(this.rootURL + '/Arrandissements');
  }

  refreshList(){
    this.http.get(this.rootURL + '/Arrandissements')
    .toPromise()
    .then(res => this.list = res as Arrandissement[]);
  }
}
