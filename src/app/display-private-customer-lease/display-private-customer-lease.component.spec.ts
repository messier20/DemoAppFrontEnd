import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPrivateCustomerLeaseComponent } from './display-private-customer-lease.component';

describe('DisplayPrivateCustomerLeaseComponent', () => {
  let component: DisplayPrivateCustomerLeaseComponent;
  let fixture: ComponentFixture<DisplayPrivateCustomerLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPrivateCustomerLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPrivateCustomerLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
