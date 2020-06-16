import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { LazyModule } from './lazy/lazy.module';
const routes: Routes = [
  {
    path: "test",
    component: TestComponent,
  },
  {
    path:'my-module',
    loadChildren:'src/app/lazy/lazy.module#LazyModule'
  }
  // {
  //   path: "my-component",
  //   pathMatch:'full',
  //   component: MyComponentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
