import { Arrandissement } from './../../../Models/arrandissement.model';
import { ToastrService } from 'ngx-toastr';
import { RegionService } from 'src/app/shared/region.service';
import { ArrandissementService } from './../../../shared/arrandissement.service';
import { Region } from './../../../Models/region.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrandissement-list',
  templateUrl: './arrandissement-list.component.html',
  styleUrls: ['./arrandissement-list.component.css']
})
export class ArrandissementListComponent implements OnInit {

  Arrandissement:Region;
  Arrandissements: Region[];
  constructor(private service: ArrandissementService,
    private regionservice:RegionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
   // this.Directions=this.directionService.getDirectionss();
    this.service.getArrandissementss().subscribe(data => {
      this.Arrandissements=data;
      console.log(this.Arrandissements);
    });
    console.log(this.Arrandissements);
  }

  populateForm(pd: Arrandissement) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteArrandissement(PMId)
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
