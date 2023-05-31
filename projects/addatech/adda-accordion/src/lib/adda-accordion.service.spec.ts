import { TestBed } from '@angular/core/testing';

import { AddaAccordionService } from './adda-accordion.service';

describe('AddaAccordionService', () => {
  let service: AddaAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddaAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
