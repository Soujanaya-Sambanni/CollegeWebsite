import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { staffModel } from './staff-info/staffModel';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url = "http://localhost:3000/staff";

  constructor(private http: HttpClient) { }

  //add
  addstaff(data:staffModel) {
    return this.http.post<staffModel>("http://localhost:3000/staff", data);
  }

  //get
  getstaff() {
    return this.http.get<staffModel[]>("http://localhost:3000/staff");
  }

  //fetch data
  fetchdata(id: number) {
    return this.http.get<staffModel>("http://localhost:3000/staff/" + id);
  }

  //delete
  deletestaff(id: number) {
    return this.http.delete<staffModel>("http://localhost:3000/staff/" + id)
  }

  //update
  updatestaff(data:staffModel, id: number) {
    return this.http.put<staffModel>("http://localhost:3000/staff/" + id, data);
  }

  //search
  searchstaff(name: string) {
    return this.http.get<any>(`${this.url}?name=${name}`);
  }
}