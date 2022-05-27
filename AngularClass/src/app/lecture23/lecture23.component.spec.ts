import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lecture23Component } from './lecture23.component';

describe('Lecture23Component', () => {
  let component: Lecture23Component;
  let fixture: ComponentFixture<Lecture23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lecture23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lecture23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
