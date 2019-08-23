import { TypePatrimoine } from './../../../Models/type-patrimoine.model';
import { TypePatrimoineService } from './../../../shared/type-patrimoine.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-type-patrimoine-list',
  templateUrl: './type-patrimoine-list.component.html',
  styleUrls: ['./type-patrimoine-list.component.css']
})
export class TypePatrimoineListComponent implements OnInit {

  constructor(private service: TypePatrimoineService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: TypePatrimoine) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteTypePatrimoine(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Type Patremoine deleated');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
