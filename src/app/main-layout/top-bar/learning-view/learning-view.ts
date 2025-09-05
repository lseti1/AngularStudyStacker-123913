import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { UIStates } from '../../../services/ui-states';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { DatePipe } from '@angular/common';
import { UiStatesSettings } from '../../../services/ui-states-settings';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-learning-view',
  imports: [TruncatePipe, DatePipe],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView {
  cardsPerSession: number;

  constructor(
    public flashcardsLearningService: FlashcardsLearning,
    public localStorageService: LocalStorageService
  ) {
    const settings = this.localStorageService.getSettings();
    this.cardsPerSession = settings.cardsPerSession;
  }

  @Input() deckTitle: string = '';
}
