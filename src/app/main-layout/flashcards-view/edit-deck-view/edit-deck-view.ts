import { Component, Input } from '@angular/core';
import { Deck } from '../../../services/dummy-data-service';
import { SelectedDeck } from '../../../services/selected-deck';
@Component({
  selector: 'app-edit-deck-view',
  imports: [],
  templateUrl: './edit-deck-view.html',
  styleUrl: './edit-deck-view.css'
})
export class EditDeckView {
  constructor(public selectedDeckService: SelectedDeck) {}
  @Input() deckData: Deck | null = null;

  onSubmit() {
    this.selectedDeckService.setAddingDeck(false);
  }
}
