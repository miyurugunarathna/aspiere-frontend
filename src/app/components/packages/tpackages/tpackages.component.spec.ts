import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpackagesComponent } from './tpackages.component';

describe('TpackagesComponent', () => {
  let component: TpackagesComponent;
  let fixture: ComponentFixture<TpackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
