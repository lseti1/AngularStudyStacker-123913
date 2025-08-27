import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { Flashcard } from '../../services/dummy-data-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FlashcardsViewService } from '../../services/flashcards-view-service';
import { AddCardView } from './add-card-view/add-card-view';
import { AddDeckView } from './add-deck-view/add-deck-view';
import { EditCardView } from './edit-card-view/edit-card-view';
import { SelectedCard } from '../../services/selected-card';
import { ViewCardView } from './view-card-view/view-card-view';

@Component({
  selector: 'app-flashcards-view',
  imports: [FontAwesomeModule, AddCardView, AddDeckView, EditCardView, ViewCardView],
  templateUrl: './flashcards-view.html',
  styleUrl: './flashcards-view.css'
})
export class FlashcardsView {
  constructor(
    public selectedDeckService: SelectedDeck, 
    public flashcardsViewService: FlashcardsViewService,
    public selectedCardService: SelectedCard
  ) {}

  faGear = faGear;

  @Input() flashcardsData: Flashcard[] = [];
  flashcardData: Flashcard | null = null;

  onSelectCardClick(id: number) {
    this.selectedCardService.setSelectedCard(id);
    this.flashcardData = this.flashcardsData.find(card => card.id === id) || null;
    console.log(this.flashcardData);
  }

  onEditAllCardClick(id: number) {
    this.flashcardsViewService.toggleView('edit');
    this.onSelectCardClick(id + 1);
  }

  onViewCardClick(id: number) {
    this.flashcardsViewService.toggleView('view');
    this.onSelectCardClick(id + 1);
  }
}
