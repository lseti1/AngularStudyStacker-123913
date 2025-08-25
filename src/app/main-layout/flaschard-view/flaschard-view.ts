import { Component, Input } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';
import { DummyDataService, Flashcard } from '../../services/dummy-data-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flaschard-view',
  imports: [FontAwesomeModule],
  templateUrl: './flaschard-view.html',
  styles: ``
})
export class FlaschardView {
  faGear = faGear;

  @Input() flashcardsData: Flashcard[] = [];
  @Input() isEditingDeck: boolean = false;
  constructor(public selectedDeckService: SelectedDeck) {}
}
