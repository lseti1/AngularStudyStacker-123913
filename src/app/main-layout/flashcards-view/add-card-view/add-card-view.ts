import { Component, Input, signal } from '@angular/core';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { Flashcard } from '../../../services/dummy-data-service';
import { LocalStorageService } from '../../../services/local-storage-service';
import { FormsModule } from '@angular/forms';
import { SelectedDeck } from '../../../services/selected-deck';

@Component({
  selector: 'app-add-card-view',
  imports: [FormsModule],
  templateUrl: './add-card-view.html',
  styleUrl: './add-card-view.css'
})
export class AddCardView {
  constructor(
    public flashcardsViewService: FlashcardsViewService, 
    public localStorageService: LocalStorageService,
    public selectedDeckService: SelectedDeck
  ){}

  @Input() deckSize: number = 0;

  frontText: string = '';
  backText: string = '';

  onSubmit() {
    if (!this.frontText || !this.backText) return; 

    const newCard: Flashcard = {
      id: this.deckSize + 1, 
      front: this.frontText,
      back: this.backText,
    };

    const deckID = this.selectedDeckService.selectedDeckID();
    if (deckID !== null) {
      this.localStorageService.addFlashcard(deckID, newCard);
    } else {
      console.error('No deck selected.');
    }

    this.frontText = '';
    this.backText = '';

    this.flashcardsViewService.toggleView('flashcards');
  }
}
