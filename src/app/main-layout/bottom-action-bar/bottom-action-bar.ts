import { Component, computed, EventEmitter, Output } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FlashcardsViewService } from '../../services/flashcards-view-service';
import { UIStates } from '../../services/ui-states';

@Component({
  selector: 'app-bottom-action-bar',
  imports: [],
  templateUrl: './bottom-action-bar.html',
  styles: ``
})
export class BottomActionBar {
  constructor (
    public selectedDeckService: SelectedDeck, 
    public flashcardsViewService: FlashcardsViewService,
    public uiStates: UIStates
  ) {}

  editButtonText = computed(() => {
    return this.flashcardsViewService.isEditAll() === true ? 'Stop Editing' : 'Edit Flashcards';
  })

  addButtonText = computed(() => {
    return this.flashcardsViewService.currentView() === 'add' ? 'Back' : 'Add Card';
  })
}
