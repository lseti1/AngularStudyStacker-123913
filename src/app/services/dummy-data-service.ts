import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DummyDataService {
  private data = {
    decks: [
      {
        id: 1,
        title: 'Deck 1',
        description: 'Deck 1 Description',
        flashcards: [
          {
            id: 1,
            front: 'Front of Card 1',
            back: 'Back of Card 1',
          },
          {
            id: 2,
            front: 'Front of Card 2',
            back: 'Back of Card 2',
          },
        ],
      },
      {
        id: 2,
        title: 'Deck 2',
        description: 'Deck 2 Description',
        flashcards: [
          {
            id: 1,
            front: 'Front of Card 1 (Deck 2)',
            back: 'Back of Card 1 (Deck 2)',
          },
          {
            id: 2,
            front: 'Front of Card 2 (Deck 2)',
            back: 'Back of Card 2 (Deck 2)',
          },
        ],
      },
    ],
  };

  getDecks() {
    return this.data.decks;
  }

  getDeckTitles() {
    return this.data.decks.map((deck) => deck.title);
  }
}
