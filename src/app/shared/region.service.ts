import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../Models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  formData: Region;
  readonly rootURL = 'http://localhost:50934/api';
  list : Region[];

  constructor(private http: HttpClient) { }

  postRegion() {
    return this.http.post(this.rootURL + '/Regions', this.formData);
  }
  putRegion() {
    return this.http.put(this.rootURL + '/Regions/'+ this.formData.Id, this.formData);
  }
  deleteRegions(id) {
    return this.http.delete(this.rootURL + '/Regions/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Regions')
    .toPromise()
    .then(res => this.list = res as Region[]);
  }
}
