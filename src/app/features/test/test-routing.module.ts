import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './presentation/pages/test1/test1.component';

const routes: Routes = [
  {
    path: '',
    // TODO: standalone component in Angular 14
    component: Test1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
