import { Component, OnInit } from '@angular/core';
import { DecksList } from './decks-list/decks-list';
import { AddDeckOptions } from './add-deck-options/add-deck-options';
import { SelectedDeck } from '../services/selected-deck';
import { LocalStorageService } from '../services/local-storage-service';
import { Deck } from '../services/dummy-data-service';
import { SelectedCard } from '../services/selected-card';
import { UIStates } from '../services/ui-states';
import { FlashcardsViewService } from '../services/flashcards-view-service';
import { FlashcardsLearning } from '../services/flashcards-learning';


@Component({
  selector: 'app-sidebar',
  imports: [DecksList, AddDeckOptions],
  templateUrl: './sidebar.html',
  styles: ``
})
export class Sidebar {
  constructor (
    public localStorageService: LocalStorageService, 
    public selectedDeckService: SelectedDeck,
    public selectedCardService: SelectedCard,
    public UIStatesService: UIStates,
    public flashcardsViewService: FlashcardsViewService,
    public flashcardsLearningService: FlashcardsLearning
  ) {}

  get decks(): Deck[] {
    return this.localStorageService.getDecks();
  }

  onReturnHome() {
    this.selectedDeckService.setSelectedDeck(false, 0)
    this.selectedDeckService.toggleView(null);
    this.selectedCardService.setSelectedCard(null);
    this.UIStatesService.toggleView(null);
    this.flashcardsViewService.toggleView('flashcards');
    
    if (this.flashcardsLearningService.isLearning()) {
      this.flashcardsLearningService.toggleIsLearning();
    }
  }
}
