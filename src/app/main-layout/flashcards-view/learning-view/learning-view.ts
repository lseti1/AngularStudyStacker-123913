import { Component, Input, OnInit, signal } from '@angular/core';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { Flashcard } from '../../../services/dummy-data-service';
import { UiStatesSettings } from '../../../services/ui-states-settings';

@Component({
  selector: 'app-learning-view',
  imports: [],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView implements OnInit {
  randomIndex: number = 0;
  savedIndex: number = 0;
  cardsPerSession: number;
  buttonText = signal<string>("");

  constructor(
    public flashcardsLearningService: FlashcardsLearning, 
    public uiStatesSettings: UiStatesSettings
  ) { this.cardsPerSession = uiStatesSettings.cardsPerSessionCount(); }
  

  ngOnInit() {
      this.buttonText.set("Get Next Card");
      this.getRandomFlashcard();
  }

  @Input() flashcardsData: Flashcard[] = [];
  currentCard = signal<Flashcard | null>(null);

  getRandomFlashcard() {
    this.flashcardsLearningService.incrementLearntCount();
    if (this.flashcardsData.length === 0) {
      this.currentCard.set(null);
      return;
    }
    this.randomIndex = Math.floor(Math.random() * this.flashcardsData.length);
    if (this.randomIndex === this.savedIndex) {
      this.randomIndex = (this.savedIndex + 1) % this.flashcardsData.length
    }

    if (this.flashcardsLearningService.flashcardsLearntCount() === this.cardsPerSession) {
      this.buttonText.set("Finish");
    }
    if (this.flashcardsLearningService.flashcardsLearntCount() > this.cardsPerSession) {
      this.flashcardsLearningService.toggleIsLearning();
    }

    this.savedIndex = this.randomIndex;
    this.currentCard.set(this.flashcardsData[this.savedIndex]);
  }
}
