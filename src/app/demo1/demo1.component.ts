import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  greet:string = "Hello Angular";
  name:string="Ramya"
  age:number=10;
  a=10;
  msg:any="Hello";
  no:number[]=[12,13,34,5]//array
  flag:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
