import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { UIStates } from '../../../services/ui-states';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-learning-view',
  imports: [TruncatePipe, DatePipe],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView {
  constructor(
        public selectedDeckService: SelectedDeck,
        public uiStates: UIStates,
        public flashcardsLearningService: FlashcardsLearning
      ) {}

  @Input() deckTitle: string = '';
}
