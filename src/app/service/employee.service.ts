import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/emplyoee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private HttpClient : HttpClient) { }
  baseurl ="https://localhost:7077/api/Employee";
//(method) EmployeeService.getemployee() : Observable<Employee>();

  getemployee() : Observable<Employee[]>
  {
    return this.HttpClient.get<Employee[]>(this.baseurl);
  }

  createemployee(emp : Employee) : Observable<Employee>
  {
    emp.id ="00000000-0000-0000-0000-000000000000";
     return this.HttpClient.post<Employee>(this.baseurl,emp);
  }

  updateemployee(emp : Employee) : Observable<Employee>
  {
    return this.HttpClient.put<Employee>(this.baseurl + '/' + emp.id,emp);
  }
  deleteemployee(id : string) : Observable<Employee>
  {
    return this.HttpClient.delete<Employee>(this.baseurl + '/' + id);
  }
}
