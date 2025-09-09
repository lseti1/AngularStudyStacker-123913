import { Component, computed, Input, signal } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { UIStates } from '../../../services/ui-states';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { UiStatesUser } from '../../../services/ui-states-user';

@Component({
  selector: 'app-default-view',
  imports: [FontAwesomeModule, CommonModule, TruncatePipe],
  templateUrl: './default-view.html',
  styleUrl: './default-view.css'
})
export class DefaultView {
  @Input() deckTitle: string = '';
  @Input() deckSize: number = 0;
  @Input() deckProficiency: number = 0;
  @Input() totalDecks: number = 0;

  userName = computed(() => this.uiStatesUserService.userLoggedIn() ? 'Demo' : 'Guest') 
  faUser = faUser;
  faGear = faGear;
  currentDate: Date = new Date();

  constructor(
      public selectedDeckService: SelectedDeck,
      public uiStatesService: UIStates,
      public uiStatesUserService: UiStatesUser,
      public flashcardsLearningService: FlashcardsLearning
    ) {}

  setUserView() {
    if (this.uiStatesUserService.userLoggedIn()) {
      this.uiStatesService.toggleView('user');
      this.uiStatesUserService.toggleView('userAccount');
    } else {
      this.uiStatesService.toggleView('user');
    }
  }
}
