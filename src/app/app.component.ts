import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { TestService } from "./test.service"
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
  constructor(private fb: FormBuilder){
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit() {
    //   console.log(this.testService.showData());
  }

  public submitForm(){
    this.isSubmitted = true;
    console.log("form value", this.profileForm);
    
  }
}
