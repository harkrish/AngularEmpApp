//ng g pipe Pipes/EmpFilter
import { Pipe, PipeTransform } from '@angular/core';
import { Employee} from '../Entities/employee';
@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {
 //value is the input, arg is the filter,return value would be filtered data from input
  transform(value: Employee[], arg: string): Employee[] {
    if(arg == "") {
      return value;
    }
    var filteredRecords = value.filter(emp=> emp.empName.includes(arg)); 
    return filteredRecords;
  }
  //Given the date,it should give age of person 
  //pipes used to transform one format to another format
}
