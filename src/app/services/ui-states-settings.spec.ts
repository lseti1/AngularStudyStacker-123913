import { TestBed } from '@angular/core/testing';

import { UiStatesSettings } from './ui-states-settings';

describe('UiStatesSettings', () => {
  let service: UiStatesSettings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiStatesSettings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
