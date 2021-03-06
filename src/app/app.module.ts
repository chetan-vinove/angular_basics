import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestService } from "./test.service";
import { CustomDirective } from './custom.directive'
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptService } from "./http-intercept.service"
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MyComponentComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // TestService
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
