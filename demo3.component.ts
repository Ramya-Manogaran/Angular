import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
list:Employee[]
  constructor() { 
    this.list=[
      {Eid:1,Ename:'Rohan',Desig:'Developer',JoinDate:new Date(2020,10,10),Salary:10000},
      {Eid:2,Ename:'Karan',Desig:'Tester',JoinDate:new Date(2019,10,10),Salary:8000},    
      {Eid:3,Ename:'Rohan',Desig:'Senior Developer',JoinDate:new Date(2016,10,10),Salary:20000},
    ] 
  }

  ngOnInit(): void {
  }

}
