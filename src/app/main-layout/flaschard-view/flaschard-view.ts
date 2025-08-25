import { Component } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { DummyDataService } from '../../services/dummy-data-service';

@Component({
  selector: 'app-flaschard-view',
  imports: [],
  templateUrl: './flaschard-view.html',
  styles: ``
})
export class FlaschardView {
  constructor(public selectedDeckService: SelectedDeck, public dummyData: DummyDataService) {}

  get selectedDeck() {
    const id = this.selectedDeckService.selectedDeckID();
    return this.dummyData.getDecks().find(deck => deck.id === id);
  }
}
