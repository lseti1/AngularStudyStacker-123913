import { Component, Input } from '@angular/core';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';
import { Flashcard } from '../../../services/dummy-data-service';

@Component({
  selector: 'app-delete-card-view',
  imports: [],
  templateUrl: './delete-card-view.html',
  styleUrl: './delete-card-view.css'
})
export class DeleteCardView {
  constructor(public flashcardsViewService: FlashcardsViewService) {}
  @Input() flashcardData: Flashcard | null = null;

  onSubmit() {
    this.flashcardsViewService.toggleView('flashcards');
  }
}
