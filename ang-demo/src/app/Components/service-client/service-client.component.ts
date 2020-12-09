//ng g c Components/ServiceClient
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Entities/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.css']
})
export class ServiceClientComponent implements OnInit {
  currentEmp : Employee = null;
  constructor(private myService: EmployeeService) { }

  ngOnInit(): void { 
    this.currentEmp = this.myService.empData;
  }

}
