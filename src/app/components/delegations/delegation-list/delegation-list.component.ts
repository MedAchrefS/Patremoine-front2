import { ArrandissementService } from './../../../shared/arrandissement.service';
import { Delegation } from './../../../Models/delegation.model';
import { ToastrService } from 'ngx-toastr';
import { DelegationService } from './../../../shared/delegation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delegation-list',
  templateUrl: './delegation-list.component.html',
  styleUrls: ['./delegation-list.component.css']
})
export class DelegationListComponent implements OnInit {
Delegations:Delegation[];
  constructor(private service: DelegationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
   // this.Directions=this.directionService.getDirectionss();
    this.service.getDelegationss().subscribe(data => {
      this.Delegations=data;
      console.log(this.Delegations);
    });
    console.log(this.Delegations);
  }

  populateForm(pd: Delegation) {
    this.service.formData = Object.assign({}, pd);
    console.log(pd.arrandissement_id);
  

  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteDelegation(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'residence deleated');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }


}
