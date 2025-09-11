import { Component, computed, EventEmitter, Input, input, Output, Signal } from '@angular/core';
import { SelectedDeck, selectedDeckArea } from '../../services/selected-deck';
import { FlashcardsViewService, flashcardViewArea } from '../../services/flashcards-view-service';
import { selectedAccountArea, UIStates } from '../../services/ui-states';
import { selectedUserArea, UiStatesUser } from '../../services/ui-states-user';
import { Flashcard } from '../../services/dummy-data-service';
import { FlashcardsLearning } from '../../services/flashcards-learning';

@Component({
  selector: 'app-bottom-action-bar',
  imports: [],
  templateUrl: './bottom-action-bar.html',
  styles: ``
})
export class BottomActionBar {
  @Input() flashcardsData: Flashcard[] = [];

  public editButtonText = computed(() => {
    return this.flashcardsViewService.isEditAll() === true ? 'Stop Editing' : 'Edit Flashcards';
  });

  public addButtonText = computed(() => {
    return this.flashcardsViewService.currentView() === 'add' ? 'Back' : 'Add Card';
  });

  public learningButtonText = computed(() => {
    return this.flashcardsLearningService.isLearning() === true ? 'End Learning' : 'Start Learning';
  });

  constructor (
    private selectedDeckService: SelectedDeck, 
    private flashcardsViewService: FlashcardsViewService,
    private uiStatesService: UIStates,
    private uiStatesUserService: UiStatesUser,
    private flashcardsLearningService: FlashcardsLearning
  ) {}

  public get currentUIView(): Signal<selectedAccountArea> {
      return this.uiStatesService.currentView;
    }
  
  public get currentDeckView(): Signal<selectedDeckArea> {
    return this.selectedDeckService.currentView;
  }

  public get deckSelected(): Signal<boolean> {
    return this.selectedDeckService.isDeckSelected;
  }

  public get currentFlashcardView(): Signal<flashcardViewArea> {
    return this.flashcardsViewService.currentView;
  }

  public get isEditingAllFlashcards(): Signal<boolean> {
    return this.flashcardsViewService.isEditAll;
  }

  public get isLearning(): Signal<boolean> {
    return this.flashcardsLearningService.isLearning;
  }

  toggleFlashcardsView(view: flashcardViewArea): void {
    this.flashcardsViewService.toggleView(view);
  }

  toggleDeckView(view: selectedDeckArea) {
    this.selectedDeckService.toggleView(view);
  }

  toggleUIStatesView(view: selectedAccountArea) {
    this.uiStatesService.toggleView(view);
  }

  toggleUIStatesUserView(view: selectedUserArea) {
    this.uiStatesUserService.toggleView(view);
  }

  toggleFlashcardsIsLearning(): void {
    this.flashcardsLearningService.toggleIsLearning();
  }

  toggleFlashcardsEditAll(): void {
    this.flashcardsViewService.toggleEditAll();
  }
}
