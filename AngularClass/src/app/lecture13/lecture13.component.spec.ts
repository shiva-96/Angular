import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture13Component } from './lecture13.component';

describe('Lecture13Component', () => {
  let component: Lecture13Component;
  let fixture: ComponentFixture<Lecture13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
