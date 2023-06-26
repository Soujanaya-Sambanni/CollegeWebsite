import { Component,OnInit } from '@angular/core';
import { datamodel } from './datamodel';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AapiService } from '../aapi.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{
  admissionform!: FormGroup;
  searchText: any;
  data: undefined | datamodel[];
  constructor(private formbuilder: FormBuilder, private api:AapiService) { }
  ngOnInit(): void {
    this.admissionform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gen: ['', Validators.required],
      sper: ['', Validators.required],
      pper: ['', Validators.required],
      cname: ['', Validators.required],
      no: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required]
  })
  this.getstudent();
}
addstudent(data: datamodel) {
  console.log(data)
  this.api.addstudent(data).subscribe((res => {
    this.admissionform.reset();
    this.getstudent();
  }
  ))

}
getstudent() {
  this.api.getstudent().subscribe((res => {
    this.data = res;
  }))
}
deletestudent(dataid: number) {
  this.api.deletestudent(dataid).subscribe((res => {
    this.deletestudent(dataid);
  }))
  this.getstudent();
}
searchstudent(event: any) {
  console.log(event.target.value);
  if (event.target.value) {
    this.api.searchstudent(event.target.value).subscribe(res => {
      this.data = res;
    })
  } else {
    this.getstudent();
  }
}

}
