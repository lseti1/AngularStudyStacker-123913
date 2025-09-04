import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStatesSettings {
  cardsPerSession = signal<number>(10);
  autoFlip = signal<boolean>(false);
  autoFlipTimer = signal<number>(1);
  language = signal<string>("English");

  setCardsPerSession(value: number) {
    this.cardsPerSession.set(value);
  }

  setAutoFlip(value: boolean) {
    this.autoFlip.set(value);
  }

  setAutoFlipTimer(value: number) {
    this.autoFlipTimer.set(value);
  }

  setLanguage(value: string) {
    this.language.set(value);
  }
}
