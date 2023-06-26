import { Component } from '@angular/core';
import { studModel } from '../studentinfo/studModel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SapiService } from '../sapi.service';

@Component({
  selector: 'app-supdate',
  templateUrl: './supdate.component.html',
  styleUrls: ['./supdate.component.css']
})
export class SupdateComponent {
  public dataid!: number;
  public student!: | studModel;
  
  constructor(private activedroute: ActivatedRoute, private router: Router, private sapi: SapiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.sapi.fetchdata(this.dataid).subscribe((data: studModel) => {
      this.student = data;
    })
  }

  supdate() {
    this.sapi.supdatestudent(this.student, this.dataid).subscribe((res: studModel) => {
      this.router.navigate(["/studentinfo"])
    })
  }

}
