import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedCard {
  selectedCardID = signal<number | null>(null);

  setSelectedCard(CardID: number | null) {
    this.selectedCardID.set(CardID);
  }
}
