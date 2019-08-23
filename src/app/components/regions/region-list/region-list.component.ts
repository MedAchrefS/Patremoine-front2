import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/shared/region.service';
import { ToastrService } from 'ngx-toastr';
import { Region } from 'src/app/Models/region.model';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {
  constructor(private service: RegionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Region) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteRegions(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Region deleated');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
