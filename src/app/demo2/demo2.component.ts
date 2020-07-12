import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
item:Employee;
  constructor() { 
    this.item={Eid:1,Ename:'Rohan',Desig:'Developer',JoinDate:new Date(2020,10,10),Salary:2000};
  }

  ngOnInit(): void {
  }

}
