import { Component, OnInit } from '@angular/core';
import { DecksList } from './decks-list/decks-list';
import { AddDeckOptions } from './add-deck-options/add-deck-options';
import { DummyDataService } from '../services/dummy-data-service';

@Component({
  selector: 'app-sidebar',
  imports: [DecksList, AddDeckOptions],
  templateUrl: './sidebar.html',
  styles: ``
})
export class Sidebar implements OnInit {
  deckTitles: string[] = [];

  constructor (public dummyDataService: DummyDataService) {}

  ngOnInit() {
    this.deckTitles = this.dummyDataService.getDeckTitles();
  }
}
