import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatThemingComponent } from './mat-theming.component';

describe('MatThemingComponent', () => {
  let component: MatThemingComponent;
  let fixture: ComponentFixture<MatThemingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatThemingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
