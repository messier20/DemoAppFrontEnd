import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedLeasingFormComponent } from './confirmed-leasing-form.component';

describe('ConfirmedLeasingFormComponent', () => {
  let component: ConfirmedLeasingFormComponent;
  let fixture: ComponentFixture<ConfirmedLeasingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedLeasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedLeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
