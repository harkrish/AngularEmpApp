import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Entities/employee';

@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  
  id: number; 
  name: string; 
 address:string; 
 salary:number;
  newEmp: Employee;
  @Output() onAdd : EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewEmployee() {
    this.newEmp =  new Employee(this.id,this.name,this.address,this.salary);
    this.onAdd.emit(this.newEmp);  
  }
}
