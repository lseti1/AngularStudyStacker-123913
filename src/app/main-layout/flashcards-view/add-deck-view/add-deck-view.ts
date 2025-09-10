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
  public deckName: string = '';
  public deckDescription: string ='';
  private deckProficiency: number = 0;
  private deckFlashcards: Flashcard[] = [];

  constructor(
    private selectedDeckService: SelectedDeck, 
    private localStorageService: LocalStorageService
  ) {}

  onSubmit(): void {
    if (!this.deckDescription || !this.deckName) return;

    const newDeck: Deck = {
      id: this.localStorageService.getDeckID(),
      title: this.deckName,
      description: this.deckDescription,
      proficiency: this.deckProficiency,
      flashcards: this.deckFlashcards
    };

    this.localStorageService.addDeck(newDeck);
    this.selectedDeckService.toggleView(null);
  }
}
