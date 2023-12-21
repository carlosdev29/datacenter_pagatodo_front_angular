import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSaveRecargasComponent } from './form-save-recargas.component';

describe('FormSaveRecargasComponent', () => {
  let component: FormSaveRecargasComponent;
  let fixture: ComponentFixture<FormSaveRecargasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSaveRecargasComponent]
    });
    fixture = TestBed.createComponent(FormSaveRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
