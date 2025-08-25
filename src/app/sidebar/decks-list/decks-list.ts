import { Component, Input, OnInit } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';  

@Component({
  selector: 'app-decks-list',
  imports: [],
  templateUrl: './decks-list.html',
  styleUrl: './decks-list.css'
})
export class DecksList  {
  @Input() deckTitles: string[] = [];

  constructor(public selectedDeckService: SelectedDeck) {}
}
