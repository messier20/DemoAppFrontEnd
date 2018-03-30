import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBusinessCustomerLeaseComponent } from './display-business-customer-lease.component';

describe('DisplayBusinessCustomerLeaseComponent', () => {
  let component: DisplayBusinessCustomerLeaseComponent;
  let fixture: ComponentFixture<DisplayBusinessCustomerLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBusinessCustomerLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBusinessCustomerLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
