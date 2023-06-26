import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { datamodel } from './admission/datamodel';

@Injectable({
  providedIn: 'root'
})
export class AapiService {

  url ="http://localhost:3000/admission/";
  constructor(private http:HttpClient){ }
  
  addstudent(data:datamodel){
    return this.http.post<datamodel>("http://localhost:3000/admission",data)
  }
  getstudent(){
    return this.http.get<datamodel[]>("http://localhost:3000/admission");
  }
  deletestudent(id:number){
    return this.http.delete<datamodel>("http://localhost:3000/admission/"+id);
  }
  fetchdata(id:number){
    return this.http.get<datamodel>("http://localhost:3000/admission/"+id);
  }
  aupdatestudent(data:datamodel,id:number){
    return this.http.put<datamodel>("http://localhost:3000/admission/"+id,data);
  }
  searchstudent(name:string){
    return this.http.get<any>(`${this.url}?name=${name}`);
  }
}