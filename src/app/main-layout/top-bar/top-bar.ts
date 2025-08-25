import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  imports: [FontAwesomeModule],
  templateUrl: './top-bar.html',
  styles: ``
})
export class TopBar {
  faUser = faUser;
  faGear = faGear;

  @Input() deckTitle: string = '';
  @Input() deckSize: number = 0;
  @Input() deckProficiency: number = 0;
  constructor(public selectedDeckService: SelectedDeck) {}
}
