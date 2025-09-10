import { Component, Input } from '@angular/core';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { DatePipe } from '@angular/common';
import { LocalStorageService } from '../../../services/local-storage-service';

@Component({
  selector: 'app-learning-view',
  imports: [TruncatePipe, DatePipe],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView {
  @Input() deckTitle: string = '';
  public cardsPerSession: number;

  constructor(
    private flashcardsLearningService: FlashcardsLearning,
    private localStorageService: LocalStorageService
  ) {
    const settings = this.localStorageService.getSettings();
    this.cardsPerSession = settings.cardsPerSession;
  }

  public get timer(): number {
    return this.flashcardsLearningService.timeCount() * 1000;
  }

  public get learntCount(): number {
    return this.flashcardsLearningService.flashcardsLearntCount();
  }
}
