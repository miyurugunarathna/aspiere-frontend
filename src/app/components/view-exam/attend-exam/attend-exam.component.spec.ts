import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendExamComponent } from './attend-exam.component';

describe('AttendExamComponent', () => {
  let component: AttendExamComponent;
  let fixture: ComponentFixture<AttendExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
