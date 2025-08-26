import { Component } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-deck-options',
  imports: [FontAwesomeModule],
  templateUrl: './add-deck-options.html',
  styleUrl: './add-deck-options.css'
})
export class AddDeckOptions {
  constructor(public selectedDeckService: SelectedDeck) {}
  
  faBars = faBars;
}
