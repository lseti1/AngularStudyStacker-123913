import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FlashcardsViewService } from '../../services/flashcards-view-service';

@Component({
  selector: 'app-bottom-action-bar',
  imports: [],
  templateUrl: './bottom-action-bar.html',
  styles: ``
})
export class BottomActionBar {
  constructor (public selectedDeckService: SelectedDeck, public flashcardsViewService: FlashcardsViewService) {}

  editButtonText: string = 'Edit Deck';
}
