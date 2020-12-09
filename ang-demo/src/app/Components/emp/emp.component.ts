import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/employee';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  
  @Input() empObj : Employee;
  
  //empId : number; 
  // empName : string; 
  // empAddress : string; 

  constructor() { } // constructors used for dependency injections to ur component
  
  //This is a function used to initialize ur data of the component
  ngOnInit(): void {  
    //this.empObj = new Employee(111,"Hari","chennai",90000); 

    // this.empName ="Hari";
    // this.empAddress = "chennai"; 
    // this.empSalary = 90000;
  }

}
