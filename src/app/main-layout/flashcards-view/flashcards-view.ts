import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { Flashcard } from '../../services/dummy-data-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FlashcardsViewService } from '../../services/flashcards-view-service';
import { AddCardView } from './add-card-view/add-card-view';

@Component({
  selector: 'app-flashcards-view',
  imports: [FontAwesomeModule, AddCardView],
  templateUrl: './flashcards-view.html',
  styleUrl: './flashcards-view.css'
})
export class FlashcardsView {
  constructor(public selectedDeckService: SelectedDeck, public flashcardsViewService: FlashcardsViewService) {}
  faGear = faGear;

  @Input() flashcardsData: Flashcard[] = [];
  // @Input() isEditingDeck: boolean = false;
  
}
