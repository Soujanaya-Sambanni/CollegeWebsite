import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studModel } from './studentinfo/studModel';


@Injectable({
  providedIn: 'root'
})
export class SapiService {
  url = "http://localhost:3000/stud";

  constructor(private http: HttpClient) { }
  //add 
  addstudent(data: studModel) {
    return this.http.post<studModel>("http://localhost:3000/stud", data);
  }

  //get
  getstudent() {
    return this.http.get<studModel[]>("http://localhost:3000/stud");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<studModel>("http://localhost:3000/stud/" + id);
  }

  //delete
  deletestudent(id: number) {
    return this.http.delete<studModel>("http://localhost:3000/stud/" + id)
  }

  //update
  supdatestudent(data: studModel, id: number) {
    return this.http.put<studModel>("http://localhost:3000/stud/" + id, data);
  }
}
