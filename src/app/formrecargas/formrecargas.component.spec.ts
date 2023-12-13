import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrecargasComponent } from './formrecargas.component';

describe('FormrecargasComponent', () => {
  let component: FormrecargasComponent;
  let fixture: ComponentFixture<FormrecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormrecargasComponent]
    });
    fixture = TestBed.createComponent(FormrecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
