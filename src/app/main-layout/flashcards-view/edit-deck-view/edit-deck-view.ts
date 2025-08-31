import { Component, Input } from '@angular/core';
import { Deck } from '../../../services/dummy-data-service';
import { SelectedDeck } from '../../../services/selected-deck';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-deck-view',
  imports: [FormsModule],
  templateUrl: './edit-deck-view.html',
  styleUrl: './edit-deck-view.css'
})
export class EditDeckView {
  constructor(public selectedDeckService: SelectedDeck) {}
  @Input() deckData: Deck | null = null;

  onSubmit() {
    this.selectedDeckService.toggleView(null);
  }
}
