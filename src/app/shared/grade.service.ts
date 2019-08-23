import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../Models/grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  formData: Grade;
  readonly rootURL = 'http://localhost:50934/api';
  list : Grade[];

  constructor(private http: HttpClient) { }

  postGrade() {
    return this.http.post(this.rootURL + '/Grades', this.formData);
  }
  putGrade() {
    return this.http.put(this.rootURL + '/Grades/'+ this.formData.Id, this.formData);
  }
  deleteGrade(id) {
    return this.http.delete(this.rootURL + '/Grades/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Grades')
    .toPromise()
    .then(res => this.list = res as Grade[]);
  }
}
