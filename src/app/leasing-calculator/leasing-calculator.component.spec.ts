import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingCalculatorComponent } from './leasing-calculator.component';

describe('LeasingCalculatorComponent', () => {
  let component: LeasingCalculatorComponent;
  let fixture: ComponentFixture<LeasingCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
