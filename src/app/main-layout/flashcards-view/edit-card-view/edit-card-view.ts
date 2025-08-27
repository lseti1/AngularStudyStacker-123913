import { Component, Input} from '@angular/core';
import { Flashcard } from '../../../services/dummy-data-service';
import { FlashcardsViewService } from '../../../services/flashcards-view-service';

@Component({
  selector: 'app-edit-card-view',
  imports: [],
  templateUrl: './edit-card-view.html',
  styleUrl: './edit-card-view.css'
})
export class EditCardView {
  constructor(public flashcardsViewService: FlashcardsViewService) {}

  @Input() flashcardData: Flashcard | null = null;

  onSubmit() {
    this.flashcardsViewService.toggleView('flashcards');
  }
}
