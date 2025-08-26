import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedDeck {
  isAddingDeck = signal<boolean>(false);

  isDeckSelected = signal<boolean>(false);
  selectedDeckID = signal<number | null>(null);

  setAddingDeck(value: boolean) {
    this.isAddingDeck.set(value);
  }

  setSelectedDeck(selected: boolean, deckID: number) {
    this.isDeckSelected.set(selected);
    this.selectedDeckID.set(deckID);
    console.log("Selected Deck:", this.isDeckSelected());
    console.log("Selected Deck ID:", this.selectedDeckID());
  }
}
