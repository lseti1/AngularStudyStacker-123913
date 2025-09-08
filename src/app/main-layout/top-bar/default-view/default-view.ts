import { Component, Input, signal } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { UIStates } from '../../../services/ui-states';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate-pipe';

@Component({
  selector: 'app-default-view',
  imports: [FontAwesomeModule, CommonModule, TruncatePipe],
  templateUrl: './default-view.html',
  styleUrl: './default-view.css'
})
export class DefaultView {
  userStatus = signal<string>("Guest");

  constructor(
      public selectedDeckService: SelectedDeck,
      public uiStates: UIStates,
      public flashcardsLearningService: FlashcardsLearning
    ) {}

  faUser = faUser;
  faGear = faGear;
  currentDate: Date = new Date();

  @Input() deckTitle: string = '';
  @Input() deckSize: number = 0;
  @Input() deckProficiency: number = 0;
  @Input() totalDecks: number = 0;
}
