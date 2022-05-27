import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture38Component } from './lecture38.component';

describe('Lecture38Component', () => {
  let component: Lecture38Component;
  let fixture: ComponentFixture<Lecture38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
