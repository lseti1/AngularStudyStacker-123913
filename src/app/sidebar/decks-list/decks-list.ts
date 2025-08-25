import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decks-list',
  imports: [],
  templateUrl: './decks-list.html',
  styleUrl: './decks-list.css'
})
export class DecksList  {
  @Input() deckTitles: string[] = [];
}
