import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedDeck {
  // isAddingDeck = signal<boolean>(false);
  // isEditingDeck = signal<boolean>(false);
  isDeckSelected = signal<boolean>(false);
  selectedDeckID = signal<number | null>(null);

  private selectedDeckState = signal< 'add' | 'edit' | 'delete' | null>(null);

  get currentView() {
    return this.selectedDeckState.asReadonly();
  }

  toggleView(view: 'add' | 'edit' | 'delete' | null) {
    this.selectedDeckState.set(view);
  }

  // setAddingDeck(value: boolean) {
  //   this.isAddingDeck.set(value);
  // }

  // setEditingDeck(value: boolean) {
  //   this.isEditingDeck.set(value);
  // }

  setSelectedDeck(selected: boolean, deckID: number) {
    this.isDeckSelected.set(selected);
    this.selectedDeckID.set(deckID);
    console.log("Selected Deck:", this.isDeckSelected());
    console.log("Selected Deck ID:", this.selectedDeckID());
  }
}
