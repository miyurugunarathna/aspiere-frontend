import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllMarksComponent } from './display-all-marks.component';

describe('DisplayAllMarksComponent', () => {
  let component: DisplayAllMarksComponent;
  let fixture: ComponentFixture<DisplayAllMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
