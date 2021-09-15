import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenrollcoursesComponent } from './studentenrollcourses.component';

describe('StudentenrollcoursesComponent', () => {
  let component: StudentenrollcoursesComponent;
  let fixture: ComponentFixture<StudentenrollcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentenrollcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentenrollcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
