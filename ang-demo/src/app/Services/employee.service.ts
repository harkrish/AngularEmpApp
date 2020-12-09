//ng g s Services/employee
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Entities/employee'; 

const baseUrl : string = "http://localhost:3000/employees";
@Injectable({
  providedIn: 'root'
}) 

export class EmployeeService { 
  empData : Employee = null; //not used in services dummy data

  constructor(private http :HttpClient) { 
    this.empData = new Employee(111,"Hari","Porur",95000);//not used in services dummy data
  } 

  getAllEmployees() : Observable<any> { // All Observable objects are asynchronous bcoz of rest calls
    return this.http.get(baseUrl);
  }
  //create data
  addEmployee(emp : any) : Observable<any>{ 
    //What u r adding has to be passed as 2nd arg to post method
    return  this.http.post(baseUrl,emp)
  } 
  //Read
  getEmployee(id: string) : Observable<any> {
    let empId = parseInt(id); 
    const url = baseUrl + "/" + empId; 
    return this.http.get(url);
  } 
  //update
  updateEmployee(emp : any) : Observable<any> {
    const url = baseUrl + "/" + emp.id;
    return this.http.put(url,emp);
  } 

  //delete 
  deleteEmployee(id:string) : Observable<any> {
    let empId = parseInt(id); 
    const url = baseUrl + "/" + empId; 
    return this.http.delete(url);
  }
}
