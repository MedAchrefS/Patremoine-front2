import { Direction } from './../../../Models/direction.model';
import { DirectionService } from './../../../shared/direction.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResidenceService } from './../../../shared/residence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  Direction:Direction;
  Directions: Direction[];

  constructor(private service: ResidenceService,
    private directionService:DirectionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.directionService.getDirectionss().subscribe(data => {
      this.Directions=data;
      console.log(this.Directions);
    });
    console.log(this.Directions);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Libelle:'',
      direction_id:null
      
     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postResidence().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Residence  Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putResidence().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Residence Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
