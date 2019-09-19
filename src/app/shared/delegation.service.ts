import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delegation } from '../Models/delegation.model';

@Injectable({
  providedIn: 'root'
})
export class DelegationService {

  list : Delegation[];
  formData: Delegation;
  readonly rootURL = 'http://localhost:50934/api';
  constructor(private http: HttpClient) { }

  postDelegation() {
    return this.http.post(this.rootURL + '/Delegations', this.formData);
  }
  putDelegation() {
    return this.http.put(this.rootURL + '/Delegations/'+ this.formData.Id, this.formData);
  }
  deleteDelegation(id) {
    return this.http.delete(this.rootURL + '/Delegations/'+ id);
  }
  getDelegation(id){
    return this.http.get(this.rootURL + '/Delegations'+id);
  }

  getDelegationss(){
    return this.http.get<Delegation[]>(this.rootURL + '/Delegations');
  }

  refreshList(){
    this.http.get(this.rootURL + '/Delegations')
    .toPromise()
    .then(res => this.list = res as Delegation[]);
  }
}
