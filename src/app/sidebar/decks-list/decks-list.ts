import { Component, Input, OnInit } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Deck } from '../../services/dummy-data-service';

@Component({
  selector: 'app-decks-list',
  imports: [FontAwesomeModule],
  templateUrl: './decks-list.html',
  styleUrl: './decks-list.css'
})
export class DecksList  {
  @Input() decksData: Deck[] = [];
  public faGear = faGear;

  constructor(
    private selectedDeckService: SelectedDeck
  ) {}
  
  onSelectDeckClick(index: number): void {
    this.selectedDeckService.setSelectedDeck(true, index);
    this.selectedDeckService.toggleView(null);
  }

  onEditDeckClick(index: number, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedDeckService.setSelectedDeck(true, index);
    this.selectedDeckService.toggleView('edit');
  }
}