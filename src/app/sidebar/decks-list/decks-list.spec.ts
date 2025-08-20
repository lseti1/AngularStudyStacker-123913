import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksList } from './decks-list';

describe('DecksList', () => {
  let component: DecksList;
  let fixture: ComponentFixture<DecksList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecksList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
