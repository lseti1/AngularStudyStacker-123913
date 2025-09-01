import { TestBed } from '@angular/core/testing';

import { UiStatesUser } from './ui-states-user';

describe('UiStatesUser', () => {
  let service: UiStatesUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiStatesUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
