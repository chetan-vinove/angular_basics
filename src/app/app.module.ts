import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestService } from "./test.service";
import { CustomDirective } from './custom.directive'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MyComponentComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
