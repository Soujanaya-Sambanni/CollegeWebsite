import { Component } from '@angular/core';
import { staffModel } from '../staff-info/staffModel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!: number;
  public staff!: | staffModel;
  
  constructor(private activedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.api.fetchdata(this.dataid).subscribe((data: staffModel) => {
      this.staff = data;
    })
  }

  update() {
    this.api.updatestaff(this.staff, this.dataid).subscribe((res: staffModel) => {
      this.router.navigate(["/staffInfo"])
    })
  }
}
