import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursematerialComponent } from './coursematerial.component';

describe('CoursematerialComponent', () => {
  let component: CoursematerialComponent;
  let fixture: ComponentFixture<CoursematerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursematerialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursematerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
