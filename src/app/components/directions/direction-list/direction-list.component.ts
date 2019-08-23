import { Direction } from './../../../Models/direction.model';
import { DirectionService } from './../../../shared/direction.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.css']
})
export class DirectionListComponent implements OnInit {

  constructor(private service: DirectionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Direction) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteDirection(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'direction deleated');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }


}
