import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlashcardsLearning } from '../../services/flashcards-learning';
import { DefaultView } from './default-view/default-view';
import { LearningView } from './learning-view/learning-view';

@Component({
  selector: 'app-top-bar',
  imports: [FontAwesomeModule, CommonModule, DefaultView, LearningView],
  templateUrl: './top-bar.html',
  styles: ``
})
export class TopBar {
  @Input() deckTitle: string = '';
  @Input() deckSize: number = 0;
  @Input() deckProficiency: number = 0;
  @Input() totalDecks: number = 0;

  constructor(
    private flashcardsLearningService: FlashcardsLearning
  ) {}

  public get isLearning(): Signal<boolean> {
    return this.flashcardsLearningService.isLearning;
  }
}
