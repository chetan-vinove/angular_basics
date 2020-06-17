import { Component, OnInit } from '@angular/core';
import { TestService } from "../../test.service"

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css']
})
export class LazyComponentComponent implements OnInit {

  constructor(private testService: TestService){
  }

  ngOnInit(){
    console.log(this.testService.showData());
  }

}
