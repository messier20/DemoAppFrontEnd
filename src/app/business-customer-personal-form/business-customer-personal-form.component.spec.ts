import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCustomerPersonalFormComponent } from './business-customer-personal-form.component';

describe('BusinessCustomerPersonalFormComponent', () => {
  let component: BusinessCustomerPersonalFormComponent;
  let fixture: ComponentFixture<BusinessCustomerPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCustomerPersonalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCustomerPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
