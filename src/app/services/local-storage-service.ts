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

  addFlashcard(deckID: number, card: Flashcard) {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    deck.flashcards.push(card); 
    this.saveDecks(decks);       
  }

  deleteFlashcard(deckID: number, flashcardID: number) {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    deck.flashcards = deck.flashcards.filter((card) => card.id !== flashcardID);
    this.saveDecks(decks);
  }

  updateFlashcard(deckID: number, flashcardID: number, flashcard: Flashcard) {
    const decks = this.getDecks(); 
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    const card = deck.flashcards.find((card) => card.id === flashcardID);

    if (!card) {
      console.error(`Card with id ${deckID} not found`);
      return;
    }

    card.front = flashcard.front ?? card.front;
    card.back = flashcard.back ?? card.back;

    this.saveDecks(decks);
  }
}
