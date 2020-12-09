import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-emp-service-client',
  templateUrl: './emp-service-client.component.html',
  styleUrls: ['./emp-service-client.component.css']
})
export class EmpServiceClientComponent implements OnInit {
  employees : any = null ; 
  currentEmployee : any = null;
  newEmp : any = {
    "id" : 0,
    "empName" : "",
    "empAddress" : "",
    "empSalary" : 0
  }
  constructor(private myService : EmployeeService) { }

  ngOnInit(): void { 
    this.myService.getAllEmployees().subscribe(data=> {
      this.employees = data;
    })   //be invoked automatically when success happens
  } 

  findEmp(id : string) {
    this.myService.getEmployee(id).subscribe(data=> {
      this.currentEmployee= data;
    })
  } 

  saveChanges() {
    this.myService.updateEmployee(this.currentEmployee).subscribe(data=>{
      alert("Employee is updated to database");
    })
  } 

  addEmployee() {
      this.myService.addEmployee(this.newEmp).subscribe(data=> {
        alert("Employee is added to the database");
      })
  } 
  delete(id : string) {
    const res : boolean = confirm("Do you really want to delete the Employee Record ?")
    if(res == true)  {
      this.myService.deleteEmployee(id).subscribe(data=> {
        alert("Employee is deleted from the database");
      })
    } 
    else {
      alert("Thank you for checking before you did the mistake");
    }
  }

}
