import { Direction } from './../../../Models/direction.model';
import { DirectionService } from './../../../shared/direction.service';
import { RegionService } from 'src/app/shared/region.service';
import { Region } from 'src/app/Models/region.model';
import { TypePatrimoineService } from './../../../shared/type-patrimoine.service';

import { TypePatrimoine } from './../../../Models/type-patrimoine.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatremoineService } from './../../../shared/patremoine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patremoine',
  templateUrl: './patremoine.component.html',
  styleUrls: ['./patremoine.component.css']
})
export class PatremoineComponent implements OnInit {
  TypePatrimoine:TypePatrimoine;
  TypePatrimoines: TypePatrimoine[];

  region: Region;
  regions:Region[];

  direction:Direction;
  directions:Direction[];
  constructor(private service: PatremoineService,
    private TypePatrimoineService:TypePatrimoineService,
    private RegionService:RegionService,
    private DirectionService:DirectionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.TypePatrimoineService.getTypePatrimoines().subscribe(data => {
      this.TypePatrimoines=data;
      console.log(this.TypePatrimoines);
    });

    this.RegionService.getRegions().subscribe(data => {
      this.regions=data;
      console.log(this.regions);
    });

    this.DirectionService.getDirectionss().subscribe(data => {
      this.directions=data;
      console.log(this.directions);
    });
    console.log(this.directions);
    console.log(this.regions);
    console.log(this.TypePatrimoines);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      designation:"",
     adresse: "", 
     superficie :"",
     couvert : "",
     num1:"", 
     observation :"",
     nature :"",
     pv_affectaion :"",
     cf:"", 
     cv:"", 
     cl:"", 
     location:"", 
     nompropritaire:"", 
     montant:"", 
     id_direction:null,
     id_region:null, 
     id_delegation:null,
     id_arrandissement:null,
     id_typePatremoine:null, 
     datecreation :null
     
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.service.postPatremoine().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Patremoine Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putPatremoine().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Patremoine Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }


}
