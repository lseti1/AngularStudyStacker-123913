import { TestBed } from '@angular/core/testing';

import { FlashcardsViewService } from './flashcards-view-service';

describe('FlashcardsViewService', () => {
  let service: FlashcardsViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
