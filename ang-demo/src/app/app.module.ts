import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule , Router, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { EmpComponent } from './Components/emp/emp.component';
import { CalcComponent } from './Components/calc/calc.component';
import { EmpManagerComponent } from './Components/emp-manager/emp-manager.component';
import { NewEmpComponent } from './Components/new-emp/new-emp.component';
import { EmpFilterPipe } from './Pipes/emp-filter.pipe';
import { ServiceClientComponent } from './Components/service-client/service-client.component';
import { EmpServiceClientComponent } from './Components/emp-service-client/emp-service-client.component';

const routes : Routes = [ 
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'calc'
  },
  {
    path : 'calc',
    component : CalcComponent
  },
  {
    path : 'new',
    component : NewEmpComponent
  },
  {
    path : 'all',
    component : EmpManagerComponent
  },
  {
    path : 'rest',
    component : EmpServiceClientComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    CalcComponent,
    EmpManagerComponent,
    NewEmpComponent,
    EmpFilterPipe,
    ServiceClientComponent,
    EmpServiceClientComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
