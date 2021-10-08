import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquizmarksComponent } from './listquizmarks.component';

describe('ListquizmarksComponent', () => {
  let component: ListquizmarksComponent;
  let fixture: ComponentFixture<ListquizmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquizmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquizmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
