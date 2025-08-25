import { Component } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';

@Component({
  selector: 'app-bottom-action-bar',
  imports: [],
  templateUrl: './bottom-action-bar.html',
  styles: ``
})
export class BottomActionBar {
  constructor (public selectedDeckService: SelectedDeck) {}
}
