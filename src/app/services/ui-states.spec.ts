import { TestBed } from '@angular/core/testing';

import { UIStates } from './ui-states';

describe('UIStates', () => {
  let service: UIStates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIStates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
