import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.html',
  styles: ``
})
export class TopBar {
  @Input() deckTitle: string = '';
  @Input() deckSize: number = 0;
  @Input() deckProficiency: number = 0;
  constructor(public selectedDeckService: SelectedDeck) {}
}
