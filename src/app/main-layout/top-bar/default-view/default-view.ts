import { Component, computed, Input, Signal } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { selectedAccountArea, UIStates } from '../../../services/ui-states';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { UiStatesUser } from '../../../services/ui-states-user';
import { LocalStorageService } from '../../../services/local-storage-service';

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

  public userName = computed(() => this.localStorageService.getCurrentUser() === 'demo' ? 'Demo' : 'Guest') 
  public faUser = faUser;
  public faGear = faGear;
  public currentDate: Date = new Date();

  constructor(
      private selectedDeckService: SelectedDeck,
      private uiStatesService: UIStates,
      private uiStatesUserService: UiStatesUser,
      private localStorageService: LocalStorageService
    ) {}

  public get deckSelected(): Signal<boolean> {
    return this.selectedDeckService.isDeckSelected;
  }

  setUserView(): void {
    if (this.localStorageService.getCurrentUser() === 'demo') {
      this.uiStatesService.toggleView('user');
      this.uiStatesUserService.toggleView('userAccount');
    } else {
      this.uiStatesService.toggleView('user');
    }
  }

  toggleUIStatesView(view: selectedAccountArea): void {
    this.uiStatesService.toggleView(view);
  }
}
