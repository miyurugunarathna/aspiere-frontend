import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentResultComponent } from './list-student-result.component';

describe('ListStudentResultComponent', () => {
  let component: ListStudentResultComponent;
  let fixture: ComponentFixture<ListStudentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStudentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
