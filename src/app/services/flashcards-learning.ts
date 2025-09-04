import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsLearning {
  isLearning = signal<boolean>(false);

  toggleIsLearning() {
    this.isLearning.set(!this.isLearning());
  }
}
