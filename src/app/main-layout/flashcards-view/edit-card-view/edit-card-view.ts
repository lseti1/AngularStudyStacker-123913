import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from '../../../services/dummy-data-service';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { FormsModule } from '@angular/forms';
import { SelectedDeck } from '../../../services/selected-deck';
import { LocalStorageService } from '../../../services/local-storage-service';
import { SelectedCard } from '../../../services/selected-card';

@Component({
  selector: 'app-edit-card-view',
  imports: [FormsModule],
  templateUrl: './edit-card-view.html',
  styleUrl: './edit-card-view.css',
})
export class EditCardView implements OnInit {
  constructor(
    public flashcardsViewService: FlashcardsViewService,
    public selectedDeckService: SelectedDeck,
    public selectedCardService: SelectedCard,
    public localStorageService: LocalStorageService
  ) {}

  frontText: string = '';
  backText: string = '';

  @Input() flashcardData: Flashcard | null = null;
  ngOnInit() {
    if (this.flashcardData) {
      this.frontText = this.flashcardData.front;
      this.backText = this.flashcardData.back;
    }
  }

  onSubmit() {
    if (this.frontText || this.backText) {
      const newCard: Flashcard = {
        id: 0,
        front: this.frontText,
        back: this.backText,
      };

      const deckID = this.selectedDeckService.selectedDeckID();
      const flashcardID = this.selectedCardService.selectedCardID();
      if (deckID !== null && flashcardID !== null) {
        this.localStorageService.updateFlashcard(deckID, flashcardID, newCard);
      } else {
        console.error('No deck or card selected.');
      }

      this.frontText = '';
      this.backText = '';
    }
    this.flashcardsViewService.toggleView('flashcards');
  }
}
