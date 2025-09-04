import { TestBed } from '@angular/core/testing';

import { FlashcardsLearning } from './flashcards-learning';

describe('FlashcardsLearning', () => {
  let service: FlashcardsLearning;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsLearning);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
