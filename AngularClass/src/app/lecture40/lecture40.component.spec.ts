import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture40Component } from './lecture40.component';

describe('Lecture40Component', () => {
  let component: Lecture40Component;
  let fixture: ComponentFixture<Lecture40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
