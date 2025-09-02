import { Component } from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { FlashcardsView } from './flashcards-view/flashcards-view';
import { BottomActionBar } from './bottom-action-bar/bottom-action-bar';
import { SelectedDeck } from '../services/selected-deck';
import { DummyDataService } from '../services/dummy-data-service';
import { LocalStorageService } from '../services/local-storage-service';

@Component({
  selector: 'app-main-layout',
  imports: [TopBar, FlashcardsView, BottomActionBar],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {
  isEditingDeck: boolean = false;

  constructor(public selectedDeckService: SelectedDeck, public localStorageService: LocalStorageService) {}
  
  get selectedDeck() {
    const id = this.selectedDeckService.selectedDeckID();
    const deck = this.localStorageService.getDecks().find(deck => deck.id === id);
    return deck ?? null;
  }

  get selectedDeckFlashcardCount(): number {
    return this.selectedDeck?.flashcards.length || 0;
  }

  get selectedDeckProficiency(): number {
    return this.selectedDeck?.proficiency || 0;
  }

  get totalNumberOfDecks(): number {
    return this.localStorageService.getDecks().length;
  }

  setIsEditingDeck(value: boolean) {
    this.isEditingDeck = value;
  }
}
