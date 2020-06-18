import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public childText:string ="";
  @Input() testData = '';
  @Output() passData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public passDataToParent(){
    this.passData.emit(this.childText)
  }

}
