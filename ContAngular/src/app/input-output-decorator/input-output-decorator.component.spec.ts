import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDecoratorComponent } from './input-output-decorator.component';

describe('InputOutputDecoratorComponent', () => {
  let component: InputOutputDecoratorComponent;
  let fixture: ComponentFixture<InputOutputDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
