import { Component, Input } from '@angular/core';
import { Flashcard } from '../../../services/dummy-data-service';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { flashcardViewArea } from '../../../services/flashcards-view-service';

@Component({
  selector: 'app-view-card-view',
  imports: [],
  templateUrl: './view-card-view.html',
  styleUrl: './view-card-view.css'
})
export class ViewCardView {
  @Input() flashcardData: Flashcard | null = null;

  constructor(
    private flashcardsViewService: FlashcardsViewService
  ) {}
  
  toggleFlashcardsView(view: flashcardViewArea): void {
    this.flashcardsViewService.toggleView(view);
  }
}
