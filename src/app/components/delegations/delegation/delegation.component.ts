import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArrandissementService } from './../../../shared/arrandissement.service';
import { DelegationService } from './../../../shared/delegation.service';
import { Arrandissement } from './../../../Models/arrandissement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.css']
})
export class DelegationComponent implements OnInit {

  Arrandissement:Arrandissement;
  Arrandissements: Arrandissement[];

  constructor(private service: DelegationService,
    private ArrandissementService:ArrandissementService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.ArrandissementService.getArrandissementss().subscribe(data => {
      this.Arrandissements=data;
      console.log(this.Arrandissements);
    });
    console.log(this.Arrandissements);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Libelle:'',
      arrandissement_id:null
      
     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postDelegation().subscribe(
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
    this.service.putDelegation().subscribe(
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
