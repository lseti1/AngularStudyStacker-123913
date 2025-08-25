import { TestBed } from '@angular/core/testing';

import { SelectedDeck } from './selected-deck';

describe('SelectedDeck', () => {
  let service: SelectedDeck;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedDeck);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
