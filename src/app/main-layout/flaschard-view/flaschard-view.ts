import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { DummyDataService, Flashcard } from '../../services/dummy-data-service';

@Component({
  selector: 'app-flaschard-view',
  imports: [],
  templateUrl: './flaschard-view.html',
  styles: ``
})
export class FlaschardView {
  @Input() flashcardsData: Flashcard[] = [];
  constructor(public selectedDeckService: SelectedDeck) {}
}
