import { effect, Injectable } from '@angular/core';
import { Deck, DummyDataService, Flashcard, settings } from './dummy-data-service';
import { UiStatesUser } from './ui-states-user';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storageKey = 'flashcardAppData';
  private settingsKey = 'flashcardAppSettings';
  guestDecks!: Deck[];
  guestSettings!: settings;

  deckIndex: number = 0;
  cardIndex: number = 0;

  constructor(
    private dummyData: DummyDataService,
    private uiUserStatesService: UiStatesUser
  ) { 
    this.initialiseData(); 
    effect(() => {
      if (this.uiUserStatesService.userLoggedIn()) {
        this.loadDemoData();
      } else {
        this.loadGuestData();
      }
    })
  }

  private initialiseData() {
    // if (!localStorage.getItem(this.storageKey)) {
    //   localStorage.setItem(this.storageKey, JSON.stringify(this.dummyData.getDecks()));
    // }

    if(!localStorage.getItem(this.settingsKey)) {
      localStorage.setItem(this.settingsKey, JSON.stringify(this.dummyData.getDefaultSettings()));
    }

    const decks = this.getDecks();
    this.deckIndex = decks.length > 0 ? Math.max(...decks.map((deck) => deck.id)) + 1 : 1;
  }

  loadDemoData() {
    this.guestDecks = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    this.guestSettings = JSON.parse(localStorage.getItem(this.settingsKey) || '{}');

    localStorage.setItem(this.storageKey, JSON.stringify(this.dummyData.getDecks()));
    localStorage.setItem(this.settingsKey, JSON.stringify(this.dummyData.getDemoSettings()));
  }

  loadGuestData() {
    if (this.guestDecks.length === 0) {
      localStorage.removeItem(this.storageKey);
    } else {
      localStorage.setItem(this.storageKey, JSON.stringify(this.guestDecks));
    }
    localStorage.setItem(this.settingsKey, JSON.stringify(this.guestSettings));
  }

  getDecks(): Deck[] {
    const deckData = localStorage.getItem(this.storageKey);
    return deckData ? JSON.parse(deckData) : [];
  }

  getDeckTitles(): string[] {
    const decks = this.getDecks(); 
    return decks.map((deck) => deck.title);
  }

  getDeckID(): number {
    return this.deckIndex;
  }

  private saveDecks(decks: Deck[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(decks));
  }

  getCardID(deckID: number): number {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck || !deck.flashcards || deck.flashcards.length === 0) {
      return 1; 
  }

  return Math.max(...deck.flashcards.map((card) => card.id)) + 1;
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
    this.cardIndex++;
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

  addDeck(deck: Deck) {
    const decks = this.getDecks();

    decks.push(deck);
    this.saveDecks(decks);
    this.deckIndex++;
  }

  deleteDeck(deckID: number) {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    const updatedDecks = decks.filter((deck) => deck.id !== deckID);
    this.saveDecks(updatedDecks);
  }

  updateDeck(deckID: number, deckName: string, deckDescription: string) {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    deck.title = deckName ?? deck.title;
    deck.description = deckDescription ?? deck.description;
    this.saveDecks(decks);
  }
  
  updateSettings<name extends keyof settings>(settingName: name, value: settings[name]) {
    const currentSettings: settings = this.getSettings();
    currentSettings[settingName] = value;
    this.saveSettings(currentSettings);
  }

  getSettings(): settings {
    const settingsData = localStorage.getItem(this.settingsKey);
    return settingsData ? JSON.parse(settingsData) : this.dummyData.getDefaultSettings();
  }

  private saveSettings(settings: settings) {
    localStorage.setItem(this.settingsKey, JSON.stringify(settings));
  }

  clearAppData(): void {
    localStorage.removeItem(this.storageKey);
    this.saveSettings(this.dummyData.getDefaultSettings());
  }
}
