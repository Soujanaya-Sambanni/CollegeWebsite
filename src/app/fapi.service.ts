import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { feesModel } from './fees/feesModel';

@Injectable({
  providedIn: 'root'
})
export class FapiService {

  url = "http://localhost:3000/fees";

  constructor(private http: HttpClient) { }

  addfees(data: feesModel) {
    return this.http.post<feesModel>("http://localhost:3000/fees", data)
  }

  getfees() {
    return this.http.get<feesModel[]>("http://localhost:3000/fees");
  }

  fetchfees(id: number) {
    return this.http.get<feesModel>("http://localhost:3000/fees/" + id);
  }

  deletefees(id: number) {
    return this.http.delete<feesModel>("http://localhost:3000/fees/" + id);
  }


  updatefees(data: feesModel, id: number) {
    return this.http.put<feesModel>("http://localhost:3000/fees/" + id, data);
  }

  searchfees(usn: string) {
    return this.http.get<any>(`${this.url}?usn=${usn}`);
  }


}

