import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypackageComponent } from './mypackage.component';

describe('MypackageComponent', () => {
  let component: MypackageComponent;
  let fixture: ComponentFixture<MypackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
