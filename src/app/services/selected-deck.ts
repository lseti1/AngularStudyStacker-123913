import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedDeck {
  selectedDeck = signal<boolean>(false);

  setSelectedDeck(selected: boolean) {
    this.selectedDeck.set(selected);
    console.log("Selected Deck:", this.selectedDeck());
  }
}
