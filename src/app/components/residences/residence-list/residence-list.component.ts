import { Observable } from 'rxjs';
import { Direction } from './../../../Models/direction.model';
import { DirectionService } from './../../../shared/direction.service';
import { ToastrService } from 'ngx-toastr';
import { Residences } from './../../../Models/residences.model';
import { ResidenceService } from './../../../shared/residence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residence-list',
  templateUrl: './residence-list.component.html',
  styleUrls: ['./residence-list.component.css']
})
export class ResidenceListComponent implements OnInit {

  Direction:Direction;
  Directions: Direction[];
  constructor(private service: ResidenceService,
    private directionService:DirectionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
   // this.Directions=this.directionService.getDirectionss();
    this.directionService.getDirectionss().subscribe(data => {
      this.Directions=data;
      console.log(this.Directions);
    });
    console.log(this.Directions);
  }

  populateForm(pd: Residences) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteResidence(PMId)
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
