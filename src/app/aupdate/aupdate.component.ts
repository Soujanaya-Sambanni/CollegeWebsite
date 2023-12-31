import { Component ,OnInit} from '@angular/core';
import { datamodel } from '../admission/datamodel';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { AapiService } from '../aapi.service';

@Component({
  selector: 'app-aupdate',
  templateUrl: './aupdate.component.html',
  styleUrls: ['./aupdate.component.css']
})
export class AupdateComponent implements OnInit {
  public dataid!: number;
  public staff!: | datamodel;
  
  constructor(private activedroute: ActivatedRoute, private router: Router, private aapi: AapiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.aapi.fetchdata(this.dataid).subscribe((data: datamodel) => {
      this.staff = data;
    })
  }

  aupdate() {
    this.aapi.aupdatestudent(this.staff, this.dataid).subscribe((res: datamodel) => {
      this.router.navigate(["/admission"])
    })
  }
}


