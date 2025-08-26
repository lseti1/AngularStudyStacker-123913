import { Component, Input, OnInit } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-decks-list',
  imports: [FontAwesomeModule],
  templateUrl: './decks-list.html',
  styleUrl: './decks-list.css'
})
export class DecksList  {
  constructor(public selectedDeckService: SelectedDeck) {}
  faGear = faGear;
  @Input() deckTitles: string[] = [];

  
}