import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegionService } from './../../../shared/region.service';
import { ArrandissementService } from './../../../shared/arrandissement.service';
import { Region } from './../../../Models/region.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrandissement',
  templateUrl: './arrandissement.component.html',
  styleUrls: ['./arrandissement.component.css']
})
export class ArrandissementComponent implements OnInit {

  Region:Region;
  Regions: Region[];

  constructor(private service: ArrandissementService,
    private RegionService:RegionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.RegionService.getRegions().subscribe(data => {
      this.Regions=data;
      console.log(this.Regions);
    });
    console.log(this.Regions);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Libelle:'',
      region_id:null
      
     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postArrandissements().subscribe(
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
    this.service.putArrandissement().subscribe(
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
