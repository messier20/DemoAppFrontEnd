import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCustomerPersonalFormComponent } from './private-customer-personal-form.component';

describe('PrivateCustomerPersonalFormComponent', () => {
  let component: PrivateCustomerPersonalFormComponent;
  let fixture: ComponentFixture<PrivateCustomerPersonalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateCustomerPersonalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCustomerPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
