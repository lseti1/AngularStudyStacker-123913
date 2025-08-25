import { Component, EventEmitter, Output } from '@angular/core';
import { SelectedDeck } from '../../services/selected-deck';

@Component({
  selector: 'app-bottom-action-bar',
  imports: [],
  templateUrl: './bottom-action-bar.html',
  styles: ``
})
export class BottomActionBar {
  editButtonText: string = 'Edit Deck';
  @Output() EditingDeck = new EventEmitter<boolean>();
  isEditingDeck: boolean = false;
  constructor (public selectedDeckService: SelectedDeck) {}

  selectEditDeck() {
    this.isEditingDeck = !this.isEditingDeck;
    this.EditingDeck.emit(this.isEditingDeck);
    this.editButtonText = this.isEditingDeck ? 'Finish Editing' : 'Edit Deck';
  }
}
