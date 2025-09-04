import { Component, Input, OnInit, signal } from '@angular/core';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { Flashcard } from '../../../services/dummy-data-service';

@Component({
  selector: 'app-learning-view',
  imports: [],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView implements OnInit {
  constructor(public flashcardsLearningService: FlashcardsLearning) {}
  randomIndex: number = 0;
  savedIndex: number = 0;

  ngOnInit() {
      this.getRandomFlashcard();
  }

  @Input() flashcardsData: Flashcard[] = [];
  currentCard = signal<Flashcard | null>(null);

  getRandomFlashcard() {
    if (this.flashcardsData.length === 0) {
      this.currentCard.set(null);
      return;
    }
    this.randomIndex = Math.floor(Math.random() * this.flashcardsData.length);
    this.savedIndex = this.randomIndex;
    this.currentCard.set(this.flashcardsData[this.savedIndex]);
  }
}
