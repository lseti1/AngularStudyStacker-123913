import { effect, Injectable, signal } from '@angular/core';
import { Deck, DummyDataService, Flashcard, settings, user } from './dummy-data-service';
import { UiStatesUser } from './ui-states-user';
import { User } from '../main-layout/flashcards-view/user-view/user/user';

type userType = 'guest' | 'demo';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private guestStorageKey = 'guestAppData';
  private guestSettingsKey = 'guestAppSettings';
  private demoStorageKey = 'demoAppData';
  private demoSettingsKey = 'demoAppSettings'
  private currentUserKey = 'currentUserType';

  private deckIndex: number = 0;
  private cardIndex: number = 0;

  public currentUser = signal<userType>(this.getCurrentUser());

  constructor(
    private dummyData: DummyDataService,
    private uiUserStatesService: UiStatesUser,
  ) { 
    this.initialiseData(); 
  }

  private initialiseData() {
    if (!localStorage.getItem(this.currentUserKey)) {
      localStorage.setItem(this.currentUserKey, 'guest');
    }

    if (!localStorage.getItem(this.guestSettingsKey)) {
      localStorage.setItem(this.guestSettingsKey, JSON.stringify(this.dummyData.getDefaultSettings()));
    }
    if (!localStorage.getItem(this.demoSettingsKey)) {
      localStorage.setItem(this.demoSettingsKey, JSON.stringify(this.dummyData.getDemoSettings()));
    }
    if (!localStorage.getItem(this.demoStorageKey)) {
      localStorage.setItem(this.demoStorageKey, JSON.stringify(this.dummyData.getDecks()));
    }

    const decks = this.getDecks();
    this.deckIndex = decks.length > 0 ? Math.max(...decks.map((deck) => deck.id)) + 1 : 1;
  }

  getDecks(): Deck[] {
    let deckData;
    if (localStorage.getItem(this.currentUserKey) === 'demo') {
      deckData = localStorage.getItem(this.demoStorageKey);
    } else {
      deckData = localStorage.getItem(this.guestStorageKey);
    }
    return deckData ? JSON.parse(deckData) : [];
  }

  getDeckTitles(): string[] {
    const decks = this.getDecks(); 
    return decks.map((deck) => deck.title);
  }

  getDeckID(): number {
    return this.deckIndex;
  }

  private saveDecks(decks: Deck[]): void {
    if (localStorage.getItem(this.currentUserKey) === 'demo') {
      localStorage.setItem(this.demoStorageKey, JSON.stringify(decks));
    } else {
      localStorage.setItem(this.guestStorageKey, JSON.stringify(decks));
    }
  }

  getCardID(deckID: number): number {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck || !deck.flashcards || deck.flashcards.length === 0) {
      return 1; 
  }

  return Math.max(...deck.flashcards.map((card) => card.id)) + 1;
}

  addFlashcard(deckID: number, card: Flashcard): void {
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

  deleteFlashcard(deckID: number, flashcardID: number): void {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    deck.flashcards = deck.flashcards.filter((card) => card.id !== flashcardID);
    this.saveDecks(decks);
  }

  updateFlashcard(deckID: number, flashcardID: number, flashcard: Flashcard): void {
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

  addDeck(deck: Deck): void {
    const decks = this.getDecks();

    decks.push(deck);
    this.saveDecks(decks);
    this.deckIndex++;
  }

  deleteDeck(deckID: number): void {
    const decks = this.getDecks();
    const deck = decks.find((deck) => deck.id === deckID);

    if (!deck) {
      console.error(`Deck with id ${deckID} not found`);
      return;
    }

    const updatedDecks = decks.filter((deck) => deck.id !== deckID);
    this.saveDecks(updatedDecks);
  }

  updateDeck(deckID: number, deckName: string, deckDescription: string): void {
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
  
  updateSettings<name extends keyof settings>(settingName: name, value: settings[name]): void {
    const currentSettings: settings = this.getSettings();
    currentSettings[settingName] = value;
    this.saveSettings(currentSettings);
  }

  getSettings(): settings {
    let settingsData;
    if (localStorage.getItem(this.currentUserKey) === 'demo') {
      settingsData = localStorage.getItem(this.demoSettingsKey);
    } else {
      settingsData = localStorage.getItem(this.guestSettingsKey);
    }

    return settingsData ? JSON.parse(settingsData) : this.dummyData.getDefaultSettings();
  }

  private saveSettings(settings: settings): void {
    if (localStorage.getItem(this.currentUserKey) === 'demo') { 
      localStorage.setItem(this.demoSettingsKey, JSON.stringify(settings));
    } else {
      localStorage.setItem(this.guestSettingsKey, JSON.stringify(settings));
    }
  }

  clearAppData(): void {
    if (localStorage.getItem(this.currentUserKey) === 'demo') { 
      localStorage.removeItem(this.demoStorageKey);
    } else {
      localStorage.removeItem(this.guestStorageKey);
    }
  }

  setUserType(type: userType): void {
    localStorage.setItem(this.currentUserKey, type);
    this.currentUser.set(type);
  }

  getCurrentUser(): userType {
    const savedUser = localStorage.getItem(this.currentUserKey);
    return savedUser === 'demo' ? 'demo' : 'guest'; 
  }
}
