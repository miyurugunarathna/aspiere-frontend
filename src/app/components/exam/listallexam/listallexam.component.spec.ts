import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallexamComponent } from './listallexam.component';

describe('ListallexamComponent', () => {
  let component: ListallexamComponent;
  let fixture: ComponentFixture<ListallexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
