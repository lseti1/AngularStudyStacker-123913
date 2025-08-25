import { Component } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.html',
  styles: ``
})
export class TopBar {
  constructor(public selectedDeckService: SelectedDeck) {}
}
