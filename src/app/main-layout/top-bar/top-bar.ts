import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedDeck } from '../../services/selected-deck';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { UIStates } from '../../services/ui-states';
import { FlashcardsLearning } from '../../services/flashcards-learning';
import { DefaultView } from './default-view/default-view';
import { LearningView } from './learning-view/learning-view';

@Component({
  selector: 'app-top-bar',
  imports: [FontAwesomeModule, CommonModule, DefaultView, LearningView],
  templateUrl: './top-bar.html',
  styles: ``
})
export class TopBar {
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
