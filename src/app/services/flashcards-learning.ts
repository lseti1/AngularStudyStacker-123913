import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsLearning {
  isLearning = signal<boolean>(false);

  startSession() {
    this.isLearning.set(true);
  }

  endSession() {
    this.isLearning.set(false);
  }
}
