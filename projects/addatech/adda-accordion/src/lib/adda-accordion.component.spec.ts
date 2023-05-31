import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaAccordionComponent } from './adda-accordion.component';

describe('AddaAccordionComponent', () => {
  let component: AddaAccordionComponent;
  let fixture: ComponentFixture<AddaAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddaAccordionComponent]
    });
    fixture = TestBed.createComponent(AddaAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
