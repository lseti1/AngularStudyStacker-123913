import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FlashcardsLearning {
  public isLearning = signal<boolean>(false);
  public flashcardsLearntCount = signal<number>(0);
  public timeCount = signal(0);
  
  private timerId: any = null;

  toggleIsLearning(): void {
    if (this.isLearning()) {
      this.flashcardsLearntCount.set(0);
      this.stopTimer();
      this.timeCount.set(0);
    } else {
      this.startTimer();
    }
    this.isLearning.set(!this.isLearning());
  }

  incrementLearntCount(): void {
    this.flashcardsLearntCount.set(this.flashcardsLearntCount() + 1);
  }

  startTimer(): void {
    if (this.timerId) return;
    this.timerId = setInterval(() => {
      this.timeCount.set(this.timeCount() + 1);
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
