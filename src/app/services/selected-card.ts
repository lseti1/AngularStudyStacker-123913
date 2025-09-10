import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SelectedCard {
  public selectedCardID = signal<number | null>(null);

  setSelectedCard(CardID: number | null): void {
    this.selectedCardID.set(CardID);
  }
}
