import { Component } from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { FlaschardView } from './flaschard-view/flaschard-view';
import { BottomActionBar } from './bottom-action-bar/bottom-action-bar';
import { SelectedDeck } from '../services/selected-deck';
import { DummyDataService } from '../services/dummy-data-service';

@Component({
  selector: 'app-main-layout',
  imports: [TopBar, FlaschardView, BottomActionBar],
  templateUrl: './main-layout.html',
  styles: ``
})
export class MainLayout {
  constructor(public selectedDeckService: SelectedDeck, public dummyData: DummyDataService) {}
  
  get selectedDeck() {
    const id = this.selectedDeckService.selectedDeckID();
    const deck = this.dummyData.getDecks().find(deck => deck.id === id);
    return deck ?? null;
  }

  get selectedDeckFlashcardCount(): number {
    return this.selectedDeck?.flashcards.length || 0;
  }
}
