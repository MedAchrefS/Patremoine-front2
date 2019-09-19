import { Region } from './../Models/region.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  getRegions(){
    return this.http.get<Region[]>(this.rootURL + '/Regions');
  }

  refreshList(){
    this.http.get(this.rootURL + '/Regions')
    .toPromise()
    .then(res => this.list = res as Region[]);
  }
}
