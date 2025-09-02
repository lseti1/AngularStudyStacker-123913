import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { Deck } from '../../../services/dummy-data-service';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-delete-deck-view',
  imports: [FormsModule],
  templateUrl: './delete-deck-view.html',
  styleUrl: './delete-deck-view.css'
})
export class DeleteDeckView {
  constructor(public selectedDeckService: SelectedDeck, public localStorageService: LocalStorageService) {}
  @Input() deckData: Deck | null = null;


  onSubmit() {
    const deckID = this.selectedDeckService.selectedDeckID();
    if (deckID !== null) {
      this.localStorageService.deleteDeck(deckID);
    } else {
      console.error('No deck selected.');
    }

    this.selectedDeckService.toggleView(null);
  }
}
