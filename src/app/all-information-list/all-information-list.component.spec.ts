import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInformationListComponent } from './all-information-list.component';

describe('AllInformationListComponent', () => {
  let component: AllInformationListComponent;
  let fixture: ComponentFixture<AllInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
