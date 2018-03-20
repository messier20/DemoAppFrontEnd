import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateformComponent } from './privateform.component';

describe('PrivateformComponent', () => {
  let component: PrivateformComponent;
  let fixture: ComponentFixture<PrivateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
