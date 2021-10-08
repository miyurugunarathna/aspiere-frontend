import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallenquiriesComponent } from './listallenquiries.component';

describe('ListallenquiriesComponent', () => {
  let component: ListallenquiriesComponent;
  let fixture: ComponentFixture<ListallenquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallenquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
