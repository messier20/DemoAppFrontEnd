import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForm2Component } from './dialog-form2.component';

describe('DialogForm2Component', () => {
  let component: DialogForm2Component;
  let fixture: ComponentFixture<DialogForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
