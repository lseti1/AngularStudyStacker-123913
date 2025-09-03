import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../../services/dummy-data-service';
import { SelectedDeck } from '../../../services/selected-deck';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-edit-deck-view',
  imports: [FormsModule],
  templateUrl: './edit-deck-view.html',
  styleUrl: './edit-deck-view.css'
})
export class EditDeckView implements OnInit {
  constructor(public selectedDeckService: SelectedDeck, public localStorageService: LocalStorageService) {}
  @Input() deckData: Deck | null = null;

  deckName: string = '';
  deckDescription: string = '';

  ngOnInit() {
    if (this.deckData) {
      this.deckName = this.deckData.title;
      this.deckDescription = this.deckData.description;
    }
  }

  onSubmit() {
    if (this.deckName || this.deckDescription) {
      const deckID = this.selectedDeckService.selectedDeckID();
      if (deckID !== null) {
        this.localStorageService.updateDeck(deckID, this.deckName, this.deckDescription);
      } else {
        console.error('No deck selected.');
      }

      this.deckName = '';
      this.deckDescription = '';
    }

    this.selectedDeckService.toggleView(null);
  }

  onDelete() {
    this.selectedDeckService.toggleView('delete');
  }
}
