import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassignmentmarksComponent } from './listassignmentmarks.component';

describe('ListassignmentmarksComponent', () => {
  let component: ListassignmentmarksComponent;
  let fixture: ComponentFixture<ListassignmentmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListassignmentmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassignmentmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
