import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewComponent } from './officer-view.component';

describe('OfficerViewComponent', () => {
  let component: OfficerViewComponent;
  let fixture: ComponentFixture<OfficerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
