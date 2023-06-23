import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { staffModel } from './staffModel';
@Component({
  selector: 'app-staff-info',
  templateUrl: './staff-info.component.html',
  styleUrls: ['./staff-info.component.css']
})
export class StaffInfoComponent implements OnInit {
  sform!: FormGroup;
  data!: staffModel[];

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.sform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      mnumber: ['', Validators.required],
      email: ['', Validators.required,Validators.email],
      desig: ['', Validators.required],
      subject: ['', Validators.required],
      address: ['', Validators.required]

    })
    this.getstaff();
  }

  addstaff(data: staffModel) {
    console.log(data)
    this.api.addstaff(data).subscribe((res => {
      this.sform.reset();
      this.getstaff();
    }))
  
}

  getstaff() {
    this.api.getstaff().subscribe(res => {
      this.data = res;
    })
  }

  deletestaff(dataid: number) {
    this.api.deletestaff(dataid).subscribe(res => {
      this.deletestaff(dataid);
    })
    this.getstaff();
  }

  searchBaby(event: any) {
    console.log(event.target.value);

    if (event.target.value) {
      this.api.searchstaff(event.target.value).subscribe(res => {
        this.data = res;
      })
    } else {
      this.getstaff();
    }

  }
}