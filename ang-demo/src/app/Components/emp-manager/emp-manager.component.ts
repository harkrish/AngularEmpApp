import { Component} from '@angular/core';
import { Employee } from 'src/app/Entities/employee';

@Component({
  selector: 'app-emp-manager',
  templateUrl: './emp-manager.component.html',
  styleUrls: ['./emp-manager.component.css']
})
export class EmpManagerComponent {
  
  employees : Employee[];
  empSearch : string = "";
  constructor() { 
    this.employees = new Array<Employee>(5); 
    this.employees[0] = new Employee(111,"Hari","chennai",90000);
    this.employees[1] = new Employee(112,"david","chennai",60000);
    this.employees[2] = new Employee(113,"shub","chennai",80000); 
    this.employees[3] = new Employee(114,"raina","chennai",80000); 
    this.employees[4] = new Employee(115,"dhoni","chennai",90000); 
  }
  
  addEmployee(emp : Employee) {
    this.employees.push(emp);
  }
}
