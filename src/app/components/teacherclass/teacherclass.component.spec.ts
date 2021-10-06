import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherclassComponent } from './teacherclass.component';

describe('TeacherclassComponent', () => {
  let component: TeacherclassComponent;
  let fixture: ComponentFixture<TeacherclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
