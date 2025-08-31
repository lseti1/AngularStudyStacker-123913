import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { Deck } from '../../../services/dummy-data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-deck-view',
  imports: [FormsModule],
  templateUrl: './delete-deck-view.html',
  styleUrl: './delete-deck-view.css'
})
export class DeleteDeckView {
  constructor(public selectedDeckService: SelectedDeck) {}
  @Input() deckData: Deck | null = null;

  onSubmit() {
    this.selectedDeckService.toggleView(null);
  }
}
