import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsubjectComponent } from './studentsubject.component';

describe('StudentsubjectComponent', () => {
  let component: StudentsubjectComponent;
  let fixture: ComponentFixture<StudentsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
