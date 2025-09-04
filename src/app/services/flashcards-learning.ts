import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsLearning {
  isLearning = signal<boolean>(false);
  flashcardsLearntCount = signal<number>(-1);
  timeCount = signal(0);
  private timerId: any = null;

  toggleIsLearning() {
    if (this.isLearning()) {
      this.flashcardsLearntCount.set(-1);
      this.stopTimer();
      this.timeCount.set(0);
    } else {
      this.startTimer();
    }
    this.isLearning.set(!this.isLearning());
  }

  incrementLearntCount() {
    this.flashcardsLearntCount.set(this.flashcardsLearntCount() + 1);
  }

  startTimer() {
    if (this.timerId) return;
    this.timerId = setInterval(() => {
      this.timeCount.set(this.timeCount() + 1);
    }, 1000);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
