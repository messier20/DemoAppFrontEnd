import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLeasingStatusComponent } from './check-leasing-status.component';

describe('CheckLeasingStatusComponent', () => {
  let component: CheckLeasingStatusComponent;
  let fixture: ComponentFixture<CheckLeasingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLeasingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckLeasingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
