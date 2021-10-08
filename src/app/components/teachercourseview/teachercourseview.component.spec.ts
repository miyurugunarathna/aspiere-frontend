import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercourseviewComponent } from './teachercourseview.component';

describe('TeachercourseviewComponent', () => {
  let component: TeachercourseviewComponent;
  let fixture: ComponentFixture<TeachercourseviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachercourseviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
