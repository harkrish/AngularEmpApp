export class Employee { 
  empId : number; 
  empName : string; 
  empAddress : string; 
  empSalary : number; 

  constructor(id: number,name :string,address:string,salary:number){
      this.empId =id; 
      this.empName =name; 
      this.empAddress = address;
      this.empSalary = salary; 

  }

}
