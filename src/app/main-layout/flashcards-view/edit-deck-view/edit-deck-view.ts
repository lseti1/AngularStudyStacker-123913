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
  @Input() deckData: Deck | null = null;

  public deckName: string = '';
  public deckDescription: string = '';

  constructor(
    private selectedDeckService: SelectedDeck, 
    private localStorageService: LocalStorageService
  ) {}
  
  ngOnInit(): void {
    if (this.deckData) {
      this.deckName = this.deckData.title;
      this.deckDescription = this.deckData.description;
    }
  }

  onSubmit(): void {
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

  onDelete(): void {
    this.selectedDeckService.toggleView('delete');
  }
}
