import { Component, Input } from '@angular/core';
import { FlashcardsLearning } from '../../../services/flashcards-learning';
import { Flashcard } from '../../../services/dummy-data-service';

@Component({
  selector: 'app-learning-view',
  imports: [],
  templateUrl: './learning-view.html',
  styleUrl: './learning-view.css'
})
export class LearningView {
  constructor(public flashcardsLearningService: FlashcardsLearning) {}

  @Input() flashcardsData: Flashcard[] = [];
}
