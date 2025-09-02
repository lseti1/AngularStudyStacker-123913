import { Injectable } from '@angular/core';
import { Deck, DummyDataService, Flashcard } from './dummy-data-service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storageKey = 'flashcardAppData';

  constructor(private dummyData: DummyDataService) { this.initialiseData(); }

  private initialiseData() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.dummyData.getDecks()));
    }
  }

  getDecks(): Deck[] {
    const deckData = localStorage.getItem(this.storageKey);
    return deckData ? JSON.parse(deckData) : [];
  }

  getDeckTitles(): string[] {
    const decks = this.getDecks(); 
    return decks.map((deck) => deck.title);
  }

  private saveDecks(decks: Deck[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(decks));
  }

  addFlashcard(deckId: number, card: Flashcard) {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckId);

    if (!deck) {
      console.error(`Deck with id ${deckId} not found`);
      return;
    }

    deck.flashcards.push(card); 
    this.saveDecks(decks);       
  }
}
