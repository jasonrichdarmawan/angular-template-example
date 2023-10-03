import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateExampleNonObservableComponent } from './template-example-non-observable.component';

describe('TemplateExampleNonObservableComponent', () => {
  let component: TemplateExampleNonObservableComponent;
  let fixture: ComponentFixture<TemplateExampleNonObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateExampleNonObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExampleNonObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
