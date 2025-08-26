import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsView } from './flashcards-view';

describe('FlashcardsView', () => {
  let component: FlashcardsView;
  let fixture: ComponentFixture<FlashcardsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
