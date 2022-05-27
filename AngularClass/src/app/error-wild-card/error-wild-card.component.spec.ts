import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorWildCardComponent } from './error-wild-card.component';

describe('ErrorWildCardComponent', () => {
  let component: ErrorWildCardComponent;
  let fixture: ComponentFixture<ErrorWildCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorWildCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorWildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
