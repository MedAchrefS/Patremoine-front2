import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TypePatrimoineService } from 'src/app/shared/type-patrimoine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-type-patrimoine',
  templateUrl: './type-patrimoine.component.html',
  styleUrls: ['./type-patrimoine.component.css']
})
export class TypePatrimoineComponent implements OnInit {


  constructor(private service: TypePatrimoineService,
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
    this.service.postTypePatrimoine().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Type Patremoine Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putTypePatrimoine().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Typepatremoine Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
