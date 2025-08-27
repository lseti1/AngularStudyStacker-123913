import { TestBed } from '@angular/core/testing';

import { SelectedCard } from './selected-card';

describe('SelectedCard', () => {
  let service: SelectedCard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
