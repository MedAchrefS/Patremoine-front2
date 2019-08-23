import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DirectionService } from './../../../shared/direction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {


  constructor(private service: DirectionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Libelle:''
     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postDirection().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Direction  ');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putDirection().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Direction Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
