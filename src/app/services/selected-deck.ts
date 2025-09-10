import { Injectable, Signal } from '@angular/core';
import { signal } from '@angular/core';

export type selectedDeckArea = 'add' | 'edit' | 'delete' | null;

@Injectable({ providedIn: 'root' })
export class SelectedDeck {
  public isDeckSelected = signal<boolean>(false);
  public selectedDeckID = signal<number | null>(null);

  private selectedDeckState = signal<selectedDeckArea>(null);

  get currentView(): Signal<selectedDeckArea> {
    return this.selectedDeckState.asReadonly();
  }

  toggleView(view: selectedDeckArea): void {
    this.selectedDeckState.set(view);
  }

  setSelectedDeck(selected: boolean, deckID: number): void {
    this.isDeckSelected.set(selected);
    this.selectedDeckID.set(deckID);
  }
}
