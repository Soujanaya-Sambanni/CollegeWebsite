import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studModel } from './studModel';
import { SapiService } from '../sapi.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {
  studform!: FormGroup;
  sdata!: studModel[];
  //data!:babyModel[];
  selectedName!:string;
  
 
  

  constructor(private formbuilder: FormBuilder, private  sapi:SapiService) { }

  ngOnInit(): void {
    this.studform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      usn: ['', Validators.required],
      //selectName: ['', Validators.required],
      dob: ['', Validators.required],
      course: ['', Validators.required],
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      snumber: ['', Validators.required],
      pnumber: ['', Validators.required],

    })
    this.getstudent();
    //this.get();
    
  }

  addstudent(data: studModel) {
    console.log(data)
    this.sapi.addstudent(data).subscribe((res => {
      this.studform.reset();
      this.getstudent();
      
    }))
  
}

  getstudent() {
    this.sapi.getstudent().subscribe(res => {
      this.sdata = res;
    })
  }

  deletestudent(dataid: number) {
    this.sapi.deletestudent(dataid).subscribe(res => {
      this.deletestudent(dataid);
    })
    this.getstudent();
  }

// get(){
//     this.api.get().subscribe(res=>{
//       this.data=res;
//     })
//   }

  onChangeEvent(event:any){
    this.selectedName = event.target.value;
    console.log(event.target.value);
  }
  
  
  
}
