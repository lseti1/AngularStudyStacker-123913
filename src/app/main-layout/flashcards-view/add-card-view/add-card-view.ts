import { Component, Input, signal } from '@angular/core';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { Flashcard } from '../../../services/dummy-data-service';
import { LocalStorageService } from '../../../services/local-storage-service';
import { FormsModule, NgForm } from '@angular/forms';
import { SelectedDeck } from '../../../services/selected-deck';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-card-view',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-card-view.html',
  styleUrl: './add-card-view.css'
})
export class AddCardView {
  @Input() deckSize: number = 0;

  public frontText: string = '';
  public backText: string = '';

  constructor(
    private flashcardsViewService: FlashcardsViewService, 
    private localStorageService: LocalStorageService,
    private selectedDeckService: SelectedDeck
  ) {}

  onSubmit(formData: NgForm): void {
    if (!this.frontText || !this.backText) return; 

    const newCard: Flashcard = {
      id: this.localStorageService.getCardID(this.selectedDeckService.selectedDeckID()!), 
      front: this.frontText,
      back: this.backText,
    };

    const deckID = this.selectedDeckService.selectedDeckID();
    if (deckID !== null) {
      this.localStorageService.addFlashcard(deckID, newCard);
    } else {
      console.error('No deck selected.');
    }

    formData.reset();
    this.frontText = '';
    this.backText = '';

    this.flashcardsViewService.toggleView('flashcards');
  }
}
