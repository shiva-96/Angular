import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture16Component } from './lecture16.component';

describe('Lecture16Component', () => {
  let component: Lecture16Component;
  let fixture: ComponentFixture<Lecture16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
