import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Test1Component } from './presentation/pages/test1/test1.component';
import { TemplateExampleComponent } from './presentation/components/template-example/template-example.component';
import { GetNamesService } from './domain/usecases/get-names.service';
import { TemplateExampleNonObservableComponent } from './presentation/components/template-example-non-observable/template-example-non-observable.component';


@NgModule({
  declarations: [
    Test1Component,
    TemplateExampleComponent,
    TemplateExampleNonObservableComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [
    // TODO: standalone component in Angular 14 for TemplateExampleComponent
    GetNamesService,
  ],
})
export class TestModule { }
