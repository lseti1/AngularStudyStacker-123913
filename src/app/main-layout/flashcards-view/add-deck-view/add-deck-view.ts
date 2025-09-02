import { Component } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { FormsModule } from '@angular/forms';
import { Deck, Flashcard } from '../../../services/dummy-data-service';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-add-deck-view',
  imports: [FormsModule],
  templateUrl: './add-deck-view.html',
  styleUrl: './add-deck-view.css'
})
export class AddDeckView {
  constructor(public selectedDeckService: SelectedDeck, public localStorageService: LocalStorageService) {}

  deckID: number = 0;
  deckName: string = '';
  deckDescription: string ='';
  deckProficiency: number = 0;
  deckFlashcards: Flashcard[] = [];

  onSubmit() {
    if (!this.deckDescription || !this.deckName) return;

    const newDeck: Deck = {
      id: this.localStorageService.getDeckSize() + 1,
      title: this.deckName,
      description: this.deckDescription,
      proficiency: this.deckProficiency,
      flashcards: this.deckFlashcards
    };

    this.localStorageService.addDeck(newDeck);
    this.selectedDeckService.toggleView(null);
  }
}
