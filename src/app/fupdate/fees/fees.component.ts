import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FapiService } from '../fapi.service';
import { feesModel } from './feesModel';
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit{
  fform!: FormGroup;
  fdata!: feesModel[];

  constructor(private formbuilder: FormBuilder, private api: FapiService) { }

  ngOnInit(): void {
    this.fform = this.formbuilder.group({
      id: ['', Validators.required],
      sname: ['', Validators.required],
      usn: ['', Validators.required],
      cno: ['', Validators.required],
      email: ['', Validators.required],
      tfees: ['', Validators.required],
      paidfees: ['', Validators.required],
      duefees: ['', Validators.required]   
    })
    this.getfees();
  }
  addfees(data: feesModel) {
    console.log(data)
    this.api.addfees(data).subscribe((res => {
      this.fform.reset();
    }))
    this.getfees();

  }

  getfees() {
    this.api.getfees().subscribe(res => {
      this.fdata = res;
    })
  }

  deletefees(dataid: number) {
    this.api.deletefees(dataid).subscribe(res => {
      this.deletefees(dataid);
    })
    this.getfees();
  }

  searchfees(event: any) {
    console.log(event.target.value);
    if (event.target.value) {
      this.api.searchfees(event.target.value).subscribe(res => {
        this.fdata = res;
      })
    } else {
      this.getfees();
    }

  }



}


