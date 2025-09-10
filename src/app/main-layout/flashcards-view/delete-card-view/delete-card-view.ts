import { Component, Input } from '@angular/core';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { Flashcard } from '../../../services/dummy-data-service';
import { LocalStorageService } from '../../../services/local-storage-service';
import { SelectedCard } from '../../../services/selected-card';
import { SelectedDeck } from '../../../services/selected-deck';

@Component({
  selector: 'app-delete-card-view',
  imports: [],
  templateUrl: './delete-card-view.html',
  styleUrl: './delete-card-view.css'
})
export class DeleteCardView {
  @Input() flashcardData: Flashcard | null = null;

  constructor(
    private flashcardsViewService: FlashcardsViewService, 
    private localStorageService: LocalStorageService,
    private selectedDeckService: SelectedDeck,
    private selectedCardService: SelectedCard
  ) {}
  
  onSubmit(): void {
    const deckID = this.selectedDeckService.selectedDeckID();
    const flashcardID = this.selectedCardService.selectedCardID();
    if (deckID !== null && flashcardID !== null) {
      this.localStorageService.deleteFlashcard(deckID, flashcardID);
    } else {
      console.error('No deck or flashcard selected.');
    }

    this.flashcardsViewService.toggleView('flashcards');
  }
}
