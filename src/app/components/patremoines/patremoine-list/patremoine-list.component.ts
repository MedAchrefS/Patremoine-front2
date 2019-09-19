import { Patremoine } from './../../../Models/patremoine.model';
import { ToastrService } from 'ngx-toastr';
import { PatremoineService } from './../../../shared/patremoine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patremoine-list',
  templateUrl: './patremoine-list.component.html',
  styleUrls: ['./patremoine-list.component.css']
})
export class PatremoineListComponent implements OnInit {

  constructor(private service: PatremoineService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Patremoine) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePatremoine(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'patremoine deleated');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  
  }
}
