import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture15Component } from './lecture15.component';

describe('Lecture15Component', () => {
  let component: Lecture15Component;
  let fixture: ComponentFixture<Lecture15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
