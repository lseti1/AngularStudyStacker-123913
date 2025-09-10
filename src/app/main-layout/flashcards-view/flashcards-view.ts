import { Component, Input, Signal } from '@angular/core';
import { SelectedDeck, selectedDeckArea } from '../../services/selected-deck';
import { Deck, Flashcard } from '../../services/dummy-data-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FlashcardsViewService, flashcardViewArea } from '../../services/flashcards-view-service';
import { AddCardView } from './add-card-view/add-card-view';
import { AddDeckView } from './add-deck-view/add-deck-view';
import { EditCardView } from './edit-card-view/edit-card-view';
import { SelectedCard } from '../../services/selected-card';
import { ViewCardView } from './view-card-view/view-card-view';
import { DeleteCardView } from './delete-card-view/delete-card-view';
import { EditDeckView } from './edit-deck-view/edit-deck-view';
import { selectedAccountArea, UIStates } from '../../services/ui-states';
import { SettingsView } from './settings-view/settings-view';
import { UserView } from './user-view/user-view';
import { DeleteDeckView } from './delete-deck-view/delete-deck-view';
import { FlashcardsLearning } from '../../services/flashcards-learning';
import { LearningView } from './learning-view/learning-view';

@Component({
  selector: 'app-flashcards-view',
  imports: [FontAwesomeModule, AddCardView, AddDeckView, EditCardView, ViewCardView, DeleteCardView, EditDeckView, SettingsView, UserView, DeleteDeckView, LearningView],
  templateUrl: './flashcards-view.html',
  styleUrl: './flashcards-view.css'
})
export class FlashcardsView {
  @Input() flashcardsData: Flashcard[] = [];
  @Input() deckData: Deck | null = null;

  public flashcardData: Flashcard | null = null;
  public faGear = faGear;

  constructor(
    private selectedDeckService: SelectedDeck, 
    private flashcardsViewService: FlashcardsViewService,
    private selectedCardService: SelectedCard,
    private uiStatesService: UIStates,
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

  onSelectCardClick(id: number): void {
    this.selectedCardService.setSelectedCard(id);
    this.flashcardData = this.flashcardsData.find(card => card.id === id) || null;
    console.log(this.flashcardData);
  }

  onEditAllCardClick(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.flashcardsViewService.toggleView('edit');
    this.onSelectCardClick(id);
  }

  onViewCardClick(id: number): void {
    this.flashcardsViewService.toggleView('view');
    this.onSelectCardClick(id);
  }

  onDeleteCardClick(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.flashcardsViewService.toggleView('delete');
    this.onSelectCardClick(id);
  }
}
