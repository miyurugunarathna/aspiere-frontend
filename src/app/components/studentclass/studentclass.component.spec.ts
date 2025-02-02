import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentclassComponent } from './studentclass.component';

describe('StudentclassComponent', () => {
  let component: StudentclassComponent;
  let fixture: ComponentFixture<StudentclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
