import { Component } from '@angular/core';
import { DecksList } from './decks-list/decks-list';
import { AddDeckOptions } from './add-deck-options/add-deck-options';

@Component({
  selector: 'app-sidebar',
  imports: [DecksList, AddDeckOptions],
  templateUrl: './sidebar.html',
  styles: ``
})
export class Sidebar {

}
