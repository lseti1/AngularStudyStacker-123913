import { Component } from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { FlashcardsView } from './flashcards-view/flashcards-view';
import { BottomActionBar } from './bottom-action-bar/bottom-action-bar';
import { SelectedDeck } from '../services/selected-deck';
import { DummyDataService } from '../services/dummy-data-service';

@Component({
  selector: 'app-main-layout',
  imports: [TopBar, FlashcardsView, BottomActionBar],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {
  isEditingDeck: boolean = false;

  constructor(public selectedDeckService: SelectedDeck, public dummyData: DummyDataService) {}
  
  get selectedDeck() {
    const id = this.selectedDeckService.selectedDeckID();
    const deck = this.dummyData.getDecks().find(deck => deck.id === id);
    return deck ?? null;
  }

  get selectedDeckFlashcardCount(): number {
    return this.selectedDeck?.flashcards.length || 0;
  }

  get selectedDeckProficiency(): number {
    return this.selectedDeck?.proficiency || 0;
  }

  setIsEditingDeck(value: boolean) {
    this.isEditingDeck = value;
  }
}
