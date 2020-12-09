import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  
  firstValue : number; 
  secondValue : number; 
  operand : string; 
  result : number ;

  constructor() { }

  ngOnInit(): void {
  } 
  onOperation() {
    this.process(this.operand);
  } 
  process(op : string) {
    switch(op ) { 
      case '+' : 
           this.result = this.firstValue + this.secondValue;          
           break;  
      case '-' : 
           this.result = this.firstValue - this.secondValue;          
           break;  
      case 'X' : 
           this.result = this.firstValue * this.secondValue;          
           break;  
      case '/' : 
           this.result = this.firstValue / this.secondValue;          
           break; 


    }
  }

}
