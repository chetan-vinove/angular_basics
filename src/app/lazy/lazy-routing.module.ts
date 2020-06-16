import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'lazy',
    pathMatch: 'full'
  },
  {
    path: "lazy",
    component: LazyComponentComponent,
  },
  // {
  //   path: "my-component",
  //   pathMatch:'full',
  //   component: MyComponentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
