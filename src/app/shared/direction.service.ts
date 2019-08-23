import { Direction } from './../Models/direction.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  
  formData: Direction;
  readonly rootURL = 'http://localhost:50934/api';
  list : Direction[];

  constructor(private http: HttpClient) { }

  postDirection() {
    return this.http.post(this.rootURL + '/Directions', this.formData);
  }
  putDirection() {
    return this.http.put(this.rootURL + '/Directions/'+ this.formData.Id, this.formData);
  }
  deleteDirection(id) {
    return this.http.delete(this.rootURL + '/Directions/'+ id);
  }
  getDirection(id){
    return this.http.get(this.rootURL + '/Directions'+id);
  }

  getDirectionss(){
    return this.http.get<Direction[]>(this.rootURL + '/Directions');
  }

  refreshList(){
    this.http.get(this.rootURL + '/Directions')
    .toPromise()
    .then(res => this.list = res as Direction[]);
  }
}
