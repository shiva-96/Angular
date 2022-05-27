import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture18Component } from './lecture18.component';

describe('Lecture18Component', () => {
  let component: Lecture18Component;
  let fixture: ComponentFixture<Lecture18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
