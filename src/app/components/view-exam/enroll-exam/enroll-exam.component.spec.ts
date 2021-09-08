import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollExamComponent } from './enroll-exam.component';

describe('EnrollExamComponent', () => {
  let component: EnrollExamComponent;
  let fixture: ComponentFixture<EnrollExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
