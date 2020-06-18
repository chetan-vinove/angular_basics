import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  public testValue:string="";
  public receivedData = "";
  constructor() { }

  ngOnInit() {
  }

  public showChildData(event){
    console.log(event);
    this.receivedData = event
  }
}
