import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FlashcardsViewService } from '../../services/flashcards-view-service';
import { UIStates } from '../../services/ui-states';
import { UiStatesUser } from '../../services/ui-states-user';
import { Flashcard } from '../../services/dummy-data-service';
import { FlashcardsLearning } from '../../services/flashcards-learning';

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
    public uiStates: UIStates,
    public uiStatesUser: UiStatesUser,
    public flashcardLearningService: FlashcardsLearning
  ) {}

  @Input() flashcardsData: Flashcard[] = [];

  editButtonText = computed(() => {
    return this.flashcardsViewService.isEditAll() === true ? 'Stop Editing' : 'Edit Flashcards';
  });

  addButtonText = computed(() => {
    return this.flashcardsViewService.currentView() === 'add' ? 'Back' : 'Add Card';
  });

  learningButtonText = computed(() => {
    return this.flashcardLearningService.isLearning() === true ? 'Finish learning' : 'Start Learning';
  });
}
