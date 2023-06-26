import { Component, OnInit } from '@angular/core';
import { feesModel } from '../fees/feesModel';
import { FapiService } from '../fapi.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-fupdate',
  templateUrl: './fupdate.component.html',
  styleUrls: ['./fupdate.component.css']
})
export class FupdateComponent implements OnInit {

  public dataid!: number;
  public fees!:  feesModel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private capi: FapiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.capi.fetchfees(this.dataid).subscribe((data: feesModel) => {
      this.fees = data;
    })
  }

  fupdate() {
    this.capi.updatefees(this.fees, this.dataid).subscribe((res: feesModel) => {
      this.router.navigate(["/fees"])
    })
  }

}


