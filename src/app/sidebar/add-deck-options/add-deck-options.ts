import { Component, computed, signal } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FlashcardsViewService } from '../../services/flashcards-view-service';
import { CommonModule } from '@angular/common';

import { flashcardViewArea } from '../../services/flashcards-view-service';

@Component({
  selector: 'app-add-deck-options',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './add-deck-options.html',
  styleUrl: './add-deck-options.css'
})
export class AddDeckOptions {
  public faBars = faBars;
  public flashcardView = computed(() => this.flashcardsViewService.currentView());
  
  constructor(
    private selectedDeckService: SelectedDeck, 
    private flashcardsViewService: FlashcardsViewService
  ) {
  }

  onAddDeckClick(): void {
    this.selectedDeckService.toggleView('add');
  }

  isCrudAction(): boolean {
    return ["edit", "view", "delete", "add"].includes(this.flashcardView());
  }
}
