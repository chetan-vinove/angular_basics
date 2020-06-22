import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from "./test.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-dream-app';
  public profileForm: FormGroup;
  public isSubmitted = false;
  public passwordRegex = '^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$';
  constructor(private fb: FormBuilder, private testService: TestService){
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.testService.getData().subscribe(data=>{
        console.log("API data",data);
}
    )
    this.testService.testSubject1.subscribe((data)=>{
      console.log("value from subject 1", data); 
    })
    this.testService.testSubject2.subscribe((data)=>{
      console.log("value from subject 2", data); 
    })
  }

  public submitForm(){
    this.isSubmitted = true;
    console.log("form value", this.profileForm);
    
  }
}
