import { HttpClient } from '@angular/common/http';
import { Residences } from './../Models/residences.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

    
  formData: Residences;
  readonly rootURL = 'http://localhost:50934/api';
  list : Residences[];

  constructor(private http: HttpClient) { }

  postResidence() {
    return this.http.post(this.rootURL + '/Residences', this.formData);
  }
  putResidence() {
    return this.http.put(this.rootURL + '/Residences/'+ this.formData.Id, this.formData);
  }
  deleteResidence(id) {
    return this.http.delete(this.rootURL + '/Residences/'+ id);
  }
  getResidence(id){
    return this.http.get(this.rootURL + '/Residences'+id);
  }
  refreshList(){
    this.http.get(this.rootURL + '/Residences')
    .toPromise()
    .then(res => this.list = res as Residences[]);
  }
}
