import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedCard {
  selectedCardID = signal<number | null>(null);

  setSelectedCard(CardID: number) {
    this.selectedCardID.set(CardID);
    console.log("Selected Card ID:", this.selectedCardID());
  }
}
