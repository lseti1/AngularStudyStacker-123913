import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

type selectedDeckArea = 'add' | 'edit' | 'delete' | null;

@Injectable({ providedIn: 'root' })
export class SelectedDeck {
  isDeckSelected = signal<boolean>(false);
  selectedDeckID = signal<number | null>(null);

  private selectedDeckState = signal<selectedDeckArea>(null);

  get currentView() {
    return this.selectedDeckState.asReadonly();
  }

  toggleView(view: selectedDeckArea) {
    this.selectedDeckState.set(view);
  }

  setSelectedDeck(selected: boolean, deckID: number) {
    this.isDeckSelected.set(selected);
    this.selectedDeckID.set(deckID);
  }
}
