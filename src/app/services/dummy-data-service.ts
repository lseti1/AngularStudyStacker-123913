import { Injectable } from '@angular/core';

export interface Flashcard {
  id: number;
  front: string;
  back: string;
}

export interface Deck {
  id: number;
  title: string;
  proficiency: number;
  description: string;
  flashcards: Flashcard[];
}

@Injectable({ providedIn: 'root' })
export class DummyDataService {
  private data = {
    decks: [
      {
        id: 1,
        title: 'Deck 1',
        proficiency: 50,
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
          {
            id: 3,
            front: 'Front of Card 3',
            back: 'Back of Card 3',
          },
          {
            id: 4,
            front: 'Front of Card 4',
            back: 'Back of Card 4',
          },
        ],
      },
      {
        id: 2,
        title: 'Deck 2',
        proficiency: 80,
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
      {
        id: 3,
        title: 'Deck 3',
        proficiency: 10,
        description: 'Deck 3 Description',
        flashcards: [
          {
            id: 1,
            front: 'Front of Card 1 (Deck 3)',
            back: 'Back of Card 1 (Deck 3)',
          },
          {
            id: 2,
            front: 'Front of Card 2 (Deck 3)',
            back: 'Back of Card 2 (Deck 3)',
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
