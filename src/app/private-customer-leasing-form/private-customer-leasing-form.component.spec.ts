import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form.component';
import {Component} from "@angular/core";



describe('PrivateCustomerLeasingFormComponent', () => {
  let component: PrivateCustomerLeasingFormComponent;
  let fixture: ComponentFixture<PrivateCustomerLeasingFormComponent>;
//
// @Component({
//   providers: [FORM_PROVIDERS],
//   directives: [FORM_DIRECTIVES]
// })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCustomerLeasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCustomerLeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
