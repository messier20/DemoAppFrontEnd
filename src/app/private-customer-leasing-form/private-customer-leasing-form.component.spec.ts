import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCustomerLeasingFormComponent } from './private-customer-leasing-form.component';

describe('PrivateCustomerLeasingFormComponent', () => {
  let component: PrivateCustomerLeasingFormComponent;
  let fixture: ComponentFixture<PrivateCustomerLeasingFormComponent>;

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
