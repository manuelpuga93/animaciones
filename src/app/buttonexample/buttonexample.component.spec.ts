import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonexampleComponent } from './buttonexample.component';

describe('ButtonexampleComponent', () => {
  let component: ButtonexampleComponent;
  let fixture: ComponentFixture<ButtonexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
