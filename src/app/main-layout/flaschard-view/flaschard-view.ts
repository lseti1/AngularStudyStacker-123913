import { Component } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';

@Component({
  selector: 'app-flaschard-view',
  imports: [],
  templateUrl: './flaschard-view.html',
  styles: ``
})
export class FlaschardView {
  constructor(public selectedDeckService: SelectedDeck) {}
}
