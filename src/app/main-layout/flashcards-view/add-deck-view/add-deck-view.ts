import { Component, signal } from '@angular/core';
import { SelectedDeck } from '../../../services/selected-deck';
import { FormsModule, NgForm } from '@angular/forms';
import { Deck, Flashcard } from '../../../services/dummy-data-service';
import { LocalStorageService } from '../../../services/local-storage-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-deck-view',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-deck-view.html',
  styleUrl: './add-deck-view.css'
})
export class AddDeckView {
  public errorMessage: string = '';
  public deckName: string = '';
  public deckDescription: string ='';
  public showErrorMessage = signal<boolean>(false);

  private deckProficiency: number = 0;
  private deckFlashcards: Flashcard[] = [];
  private deckTitles: string[] = [];

  constructor(
    private selectedDeckService: SelectedDeck, 
    private localStorageService: LocalStorageService
  ) {
    this.deckTitles = localStorageService.getDeckTitles();
  }

  onSubmit(formData: NgForm): void {
    if (this.deckTitles.includes(this.deckName)) {
      this.setTemporaryMessage(`'${this.deckName}' is already taken. Please enter another name for your deck.`);
      formData.reset();
      this.deckName = '';
      this.deckDescription = '';
      return;
    } 

    const newDeck: Deck = {
      id: this.localStorageService.getDeckID(),
      title: this.deckName,
      description: this.deckDescription,
      proficiency: this.deckProficiency,
      flashcards: this.deckFlashcards
    };

    formData.reset();
    this.localStorageService.addDeck(newDeck);
    this.selectedDeckService.toggleView(null);
  }

  setTemporaryMessage(message: string) {
    this.errorMessage = message;
    this.showErrorMessage.set(true);

    setTimeout(() => {
      this.showErrorMessage.set(false);
    }, 5000);
  }
}
