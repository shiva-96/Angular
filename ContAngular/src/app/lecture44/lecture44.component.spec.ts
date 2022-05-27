import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture44Component } from './lecture44.component';

describe('Lecture44Component', () => {
  let component: Lecture44Component;
  let fixture: ComponentFixture<Lecture44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
