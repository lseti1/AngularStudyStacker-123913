import { Component, OnInit } from '@angular/core';
import { DecksList } from './decks-list/decks-list';
import { AddDeckOptions } from './add-deck-options/add-deck-options';
import { SelectedDeck } from '../services/selected-deck';
import { LocalStorageService } from '../services/local-storage-service';
import { Deck } from '../services/dummy-data-service';


@Component({
  selector: 'app-sidebar',
  imports: [DecksList, AddDeckOptions],
  templateUrl: './sidebar.html',
  styles: ``
})
export class Sidebar {
  constructor (public localStorageService: LocalStorageService, public selectedDeckService: SelectedDeck) {}

  get decks(): Deck[] {
    return this.localStorageService.getDecks();
  }
}
